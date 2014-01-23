import os

copyCommand = "osascript ClipboardCopy.applescript"
cakekizerCommand = "python CakekizerLibrary.py \"`pbpaste`\" | pbcopy"
pasteCommand = "osascript ClipboardPaste.applescript"
os.system(copyCommand)
os.system(cakekizerCommand)
os.system(pasteCommand)