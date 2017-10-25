---
layout: default
title: Networking
---
### Networking

It can be a bit complicated to connect to other users (but no more than it would be for, say, a minecraft server), so here are some basic instructions on the various methods you can try:

1. To connect to other instances on the same computer, leave the IP address set to "localhost" and just open the application a bunch of times, press "Host Server" on one of them, and "Connect to Server" on the rest.  

2. To connect over LAN (e.g. two people in the same house), have one person press "Host Server", and find your local IP (generally in the format of 192.168.1.XXX). Other users put that IP in the "Server IP" field in project settings, and then press "Connect to Server".  

You have three options for connecting to people world wide:

1. One user can port forward port 8080 (or whatever port they prefer, its configurable), press "Host Server", find their global IP (google search "what's my IP?" and google will tell you this), and the other users put that into the "Server IP" field.

2. You can use hamachi, and have everyone connect to the same hamachi room. Then one user presses "Host Server", and the others will plug in the IP address for that user, as given by hamachi, into the "Server IP" field, at which point they should be able to connect.

3. If you have a server running somewhere (through AWS or Azure or something), on the github page there is a "server.js" file you can run that will host the server for you, and then people just connect to the IP of your server.

I realize some of that sounds complicated, but fortunately you only need to do most of it once. For example, after you've found the IP you need to use, that gets saved in the project file so you don't need to find it again. 
