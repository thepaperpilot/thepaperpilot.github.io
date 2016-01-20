---
layout: default
title: The Paper Pilot
---
# Hello!
I'm Anthony Lawn, or "The Paper Pilot". My passion is computer science, which you can see from my history of software engineering and game development stretching across desktop, web, and mobile applications. I'm currently attending the University of Texas at Dallas, working towards a B.S. in Computer Science.

I have experience with ActionScript, Bash script, CSS, HTML, Java, JavaScript, Python, and Ruby. Additionally, I can use Git, LaTeX, and Jekyll. I really like LaTeX and markdown for writing things, including this website.

[Download my Resume](https://drive.google.com/uc?export=download&id=0B4xCmMA9eS2jZExWTGhtbS1nT0k)

**Projects**
{% for project in site.projects %}
<div id="projects" style="overflow: hidden;">
  <div class="thumb">
    <a href="{{ project.permalink }}">
    <img src=".{{  project.permalink }}/thumb.png">
    <span class="thumbcaption"><p style="display: inline">
      {{ project.title }}
    </p></span></a>
  </div>
{% endfor %}
