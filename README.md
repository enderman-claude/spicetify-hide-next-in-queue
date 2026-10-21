# Hide Next In Queue

A Spicetify extension that hides the "Next in queue" section (and its "Open queue" button) in the Now Playing panel.

## Install

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
