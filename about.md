---
layout: about
title: About
permalink: /about/
---

{% include img-gen.html src='/img/sf-white.svg' class='about-logo' %}

# About
**Simplest Form** is an online publication with the mission of providing the most straightforward, easy-to-understand coding tutorials on the web.

# Team

S/F is the project of [Samson Zhang](https://www.wwsalmon.com/), a self-taught and still constantly learning designer and developer currently attending high school in New York City.

<div class='team-container'>
{% for person in site.data.team %}
  {% include team-member.html data=person %}
{% endfor %}
</div>
