import { readFileSync, writeFileSync } from 'node:fs'

const projectFile = 'safari-build/IPFSCompanion/IPFSCompanion.xcodeproj/project.pbxproj'

const lines = readFileSync(projectFile, 'utf8').split('\n')
const output = []
let inExtensionConfig = false
let addedNetworkEntitlement = false

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  output.push(line)

  // Detect the start of a build configuration block
  if (line.trim() === 'isa = XCBuildConfiguration;') {
    inExtensionConfig = false
    addedNetworkEntitlement = false
    continue
  }

  // Mark blocks that belong to an extension target
  if (/INFOPLIST_FILE\s*=\s*".*\(Extension\)\/Info\.plist";/.test(line)) {
    inExtensionConfig = true
  }

  // Add outgoing network entitlement right after DEVELOPMENT_TEAM in extension configs
  if (inExtensionConfig && /DEVELOPMENT_TEAM\s*=\s*.+;/.test(line) && !addedNetworkEntitlement) {
    // Peek ahead to avoid duplicating if already present
    let alreadyPresent = false
    for (let j = i + 1; j < lines.length && j < i + 10; j++) {
      if (/ENABLE_OUTGOING_NETWORK_CONNECTIONS\s*=\s*YES;/.test(lines[j])) {
        alreadyPresent = true
        break
      }
      if (lines[j].trim().startsWith('DEVELOPMENT_TEAM') || lines[j].trim() === '};') {
        break
      }
    }
    if (!alreadyPresent) {
      const indent = line.match(/^(\s*)/)[1]
      output.push(`${indent}ENABLE_OUTGOING_NETWORK_CONNECTIONS = YES;`)
      addedNetworkEntitlement = true
    }
  }
}

writeFileSync(projectFile, output.join('\n'))
console.log('Patched Safari extension project entitlements.')
