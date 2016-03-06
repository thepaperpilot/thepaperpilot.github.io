---
layout: default
title: The Paper Pilot
name: Home
---
# Hello!
I'm Anthony Lawn, or "The Paper Pilot". My passion is computer science, which you can see from my history of software engineering and game development stretching across desktop, web, and mobile applications. I'm currently attending the University of Texas at Dallas, working towards a B.S. in Computer Science.

I have experience with ActionScript, Bash script, CSS, HTML, Java, JavaScript, Python, and Ruby. Additionally, I can use Git, LaTeX, and Jekyll. I really like LaTeX and markdown for writing things, including this website.

## Projects
{% for project in site.project-categories %}
### {{ project }}
<ul>
  {% for page in site.pages %}
    {% if page.project-category == project %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
