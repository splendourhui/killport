# killport
Sometimes our node threads use some port, so we should find out the PID which uses the port and kill it.
The small node codes is used to do the simple thing!

You can alias in your .bashrc or .zshrc file like this:
```
alias killport="node ~/projects/killport/kill.js"
```

Then kill port like this:
```
killport 3000
```
