# Hide Next In Queue

A Spicetify extension that hides the "Next in queue" section (and its "Open queue" button) in the Now Playing panel.

## Install

### Option A: Spicetify Marketplace (recommended)

1. Open Spicetify Marketplace from the Spotify sidebar. If it isn't there, install it first from the Spicetify Marketplace instructions.
2. Search for "Hide Next In Queue".
3. Click Install, then restart Spotify.

### Option B: Manual install

1. Copy `hide-next-in-queue.js` into your Spicetify Extensions folder:
   - Windows: `%appdata%\spicetify\Extensions\`
   - Linux / macOS: `~/.config/spicetify/Extensions/`
2. Enable it and apply:
   ```
   spicetify config extensions hide-next-in-queue.js
   spicetify apply
   ```
3. Fully restart Spotify.

## Notes

- The extension finds the section by its English heading text, so it won't work if Spotify is set to another language.
- If a Spotify update renames the heading, update the `LABEL` value in the script.
