--Set better touch tool keymap
tell application "Sublime Text 2"
	activate
	tell application "System Events"
		keystroke "c" using {command down}
	end tell
end tell