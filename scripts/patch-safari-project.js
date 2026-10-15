import { readFileSync, writeFileSync } from 'node:fs'

const projectFile = 'safari-build/safari-native-templates/IPFSCompanion.xcodeproj/project.pbxproj'
const manifestFile = 'add-on/manifest.common.json'
const developmentTeam = 'M684FYCYG6'

// Read the version that the build process wrote into the common manifest.
const manifest = JSON.parse(readFileSync(manifestFile, 'utf8'))
const version = manifest.version || '3.4.0'
const versionParts = version.split('.')
const marketingVersion = version
const buildNumber = versionParts.length > 3 ? versionParts[versionParts.length - 1] : '1'

const content = readFileSync(projectFile, 'utf8')
const lines = content.split('\n')
const output = []
let inConfig = false
let isExtensionConfig = false
let addedDevelopmentTeam = false
let addedNetworkEntitlement = false

function peekAhead (start, pattern, stopPattern) {
  for (let j = start + 1; j < lines.length && j < start + 15; j++) {
    if (pattern.test(lines[j])) return true
    if (stopPattern.test(lines[j])) return false
  }
  return false
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]

  // Replace version/build values wherever they appear.
  if (/^\s*MARKETING_VERSION\s*=\s*[^;]+;\s*$/.test(line)) {
    const indent = line.match(/^(\s*)/)[1]
    output.push(`${indent}MARKETING_VERSION = ${marketingVersion};`)
    continue
  }

  if (/^\s*CURRENT_PROJECT_VERSION\s*=\s*\d+;\s*$/.test(line)) {
    const indent = line.match(/^(\s*)/)[1]
    output.push(`${indent}CURRENT_PROJECT_VERSION = ${buildNumber};`)
    continue
  }

  output.push(line)

  // Detect the start of a build configuration block
  if (line.trim() === 'isa = XCBuildConfiguration;') {
    inConfig = true
    isExtensionConfig = false
    addedDevelopmentTeam = false
    addedNetworkEntitlement = false
    continue
  }

  // Detect the end of a build configuration block
  if (inConfig && line.trim() === '};') {
    inConfig = false
    continue
  }

  // Mark blocks that belong to an extension target
  if (/INFOPLIST_FILE\s*=\s*".*\(Extension\)\/Info\.plist";/.test(line)) {
    isExtensionConfig = true
  }

  // Ensure DEVELOPMENT_TEAM is set right after CURRENT_PROJECT_VERSION in every config
  if (inConfig && /CURRENT_PROJECT_VERSION\s*=\s*\d+;/.test(line)) {
    const hasTeam = peekAhead(
      i,
      /DEVELOPMENT_TEAM\s*=\s*[^;]+;/,
      /^(\s*\};|\s*CODE_SIGN_STYLE\s*=|\s*INFOPLIST_FILE\s*=)/
    )
    if (!hasTeam && !addedDevelopmentTeam) {
      const indent = line.match(/^(\s*)/)[1]
      output.push(`${indent}DEVELOPMENT_TEAM = ${developmentTeam};`)
      addedDevelopmentTeam = true
    }
  }

  // Add outgoing network entitlement right after DEVELOPMENT_TEAM in extension configs
  if (isExtensionConfig && /DEVELOPMENT_TEAM\s*=\s*[^;]+;/.test(line) && !addedNetworkEntitlement) {
    const alreadyPresent = peekAhead(
      i,
      /ENABLE_OUTGOING_NETWORK_CONNECTIONS\s*=\s*YES;/,
      /^(\s*\};|\s*DEVELOPMENT_TEAM\s*=)/
    )
    if (!alreadyPresent) {
      const indent = line.match(/^(\s*)/)[1]
      output.push(`${indent}ENABLE_OUTGOING_NETWORK_CONNECTIONS = YES;`)
      addedNetworkEntitlement = true
    }
  }
}

writeFileSync(projectFile, output.join('\n'))
console.log(`Patched Safari project: version=${marketingVersion}, build=${buildNumber}, team=${developmentTeam}`)
