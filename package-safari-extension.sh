#!/usr/bin/env bash
set -euo pipefail

usage() {
    cat <<'EOF'
Usage: package-safari-extension.sh [OPTIONS] [EXTENSION_SRC] [-- [PACKAGER_ARGS...]]

Package or rebuild the IPFS Companion Safari Web Extension into an Xcode project
using Xcode's safari-web-extension-packager.

Options:
  -h, --help    Show this help text and exit.

Arguments:
  EXTENSION_SRC Path to the built Safari extension directory.
                Default: ./distros/safari
  PACKAGER_ARGS Additional arguments forwarded to
                safari-web-extension-packager after `--`.

Examples:
  package-safari-extension.sh
  package-safari-extension.sh ./distros/safari -- --force --no-open
EOF
}

EXTENSION_SRC="./distros/safari"
PACKAGER_ARGS=()
PACKAGER_SHOW_HELP=false

while (($#)); do
    case "$1" in
        -h|--help)
            usage
            exit 0
            ;;
        --)
            shift
            PACKAGER_ARGS=("$@")
            break
            ;;
        -*)
            echo "Error: unsupported option '$1'." >&2
            usage >&2
            exit 1
            ;;
        *)
            if [[ "$EXTENSION_SRC" != "./distros/safari" ]]; then
                echo "Error: unexpected extra argument '$1'." >&2
                usage >&2
                exit 1
            fi
            EXTENSION_SRC="$1"
            ;;
    esac
    shift
done

for arg in "${PACKAGER_ARGS[@]}"; do
    case "$arg" in
        -h|--help)
            PACKAGER_SHOW_HELP=true
            break
            ;;
    esac
done

PROJECT_LOCATION="./safari-build"
PROJECT_FILE="$PROJECT_LOCATION/IPFSCompanion/IPFSCompanion.xcodeproj"

APP_NAME="IPFSCompanion"
BUNDLE_IDENTIFIER="org.ipfs.IPFSCompanion"

echo "==> Verifying environment..."
if [[ "$(uname)" != "Darwin" ]]; then
    echo "Error: This script must be run on macOS with Xcode installed." >&2
    exit 1
fi
if ! xcrun --find safari-web-extension-packager &>/dev/null; then
    echo "Error: safari-web-extension-packager tool not found." >&2
    exit 1
fi

if [[ "$PACKAGER_SHOW_HELP" == true ]]; then
    xcrun safari-web-extension-packager --help || true
    exit 0
fi

echo "==> Building IPFS Companion (npm run build)..."
npm run build

echo "==> Preparing Safari manifest and distro..."
node scripts/merge-manifest.js safari
rm -rf "$EXTENSION_SRC"
mkdir -p "$EXTENSION_SRC"
cp -R add-on/_locales add-on/dist add-on/icons add-on/images "$EXTENSION_SRC"/
cp add-on/manifest.json "$EXTENSION_SRC"/manifest.json

if [[ ! -f "$EXTENSION_SRC/manifest.json" ]]; then
    echo "Error: No 'manifest.json' found in '$EXTENSION_SRC'." >&2
    exit 1
fi

echo "==> Packaging extension from: $EXTENSION_SRC"
echo "==> Target output location:  $PROJECT_LOCATION"
echo "==> App Name:               $APP_NAME"
echo "==> Bundle ID:              $BUNDLE_IDENTIFIER"

if [[ -d "$PROJECT_FILE" ]]; then
    echo "==> Existing Xcode project detected. Rebuilding project target..."
    xcrun safari-web-extension-packager \
        --rebuild-project "$PROJECT_FILE" \
        --project-location "$PROJECT_LOCATION" \
        --app-name "$APP_NAME" \
        --bundle-identifier "$BUNDLE_IDENTIFIER" \
        --copy-resources \
        --no-prompt \
        --no-open \
        "${PACKAGER_ARGS[@]}" \
        "$EXTENSION_SRC"
else
    echo "==> No existing project found. Creating a fresh Xcode project..."
    mkdir -p "$PROJECT_LOCATION"
    xcrun safari-web-extension-packager \
        --project-location "$PROJECT_LOCATION" \
        --app-name "$APP_NAME" \
        --bundle-identifier "$BUNDLE_IDENTIFIER" \
        --copy-resources \
        --no-prompt \
        --no-open \
        "${PACKAGER_ARGS[@]}" \
        "$EXTENSION_SRC"
fi

# restore default Chromium manifest for normal development builds
node scripts/merge-manifest.js chromium || true

echo "SUCCESS: Xcode project processed successfully at $PROJECT_FILE"
