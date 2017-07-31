---
layout: default
title: Hosting
---
#### Hosting

Here are some rough instructions for setting up an AWS server to run babble buds. It could work on any server you have so long as you can open a port on it. 

1. Create an AWS instance running Ubuntu (just so you can use aptitude, you could also use a different distribution, if you know how to search for the needed packages in its respective package manager). If you're using a server you've set up previously, then you can skip this step.

2. Install node and the node package manager:

	```
	sudo apt-get install nodejs npm
	```

	If you're not running ubuntu then that command will look different. There is probably a tutorial out there somewhere if you look up "How to install node and npm on <operating system>". The rest of the commands should work on any operating system, even Windows.

3. Install the node packages listed in server.js:

	```
	npm install fs-extra
	npm install socket.io
	npm install socket.io-stream
	```

	I plan on making a package.json for the standalone server so that you'd just need to run "npm install" and it'd automatically install all 3 of those for you. It should be pointed out you don't need to install http or path, as those are included in nodejs.

4. In whatever form you choose, get the server.js file onto your server. You could do this over scp or by downloading it from github. You only need the server.js file!

5. Start the server by running "node server.js". I'd recommend doing this in a program called tmux or screen, as those will allow you to start the server, and exit out of the AWS instance without closing the server. The server will now be running, and all the users can just put in the IP address of your AWS server into Babble Buds and press "Connect to Server". They will not need to deal with node or npm or anything else. 
