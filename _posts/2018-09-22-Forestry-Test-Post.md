---
title: Forestry Test Post
layout: post
author: Samson Zhang
date: 2018-09-22 20:52:41 +0000
tags: announcement pure-css
thumbnail: ''
keyword: hamburger-2
thumb-ext: mp4

---
Hello everyone! This post is a test post from Forestry, a CMS I'm trying out. If everything works it could make my life a lot easier. So far it seems to be going fine. Hit read more to see some tests I'm doing.

<!--break-->

## Inline Code Test

{% capture style_1 %}
body{
  margin: 0;
  font-family: sans-serif;
}

.menu{
  position: fixed;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  transition: left 0.2s ease;
}

#hamburger{
  display: none;
}

#hamburger ~ label{
  position: fixed;
  padding: 16px;
  z-index: 5;
  cursor: pointer;
}

.menu-item{
  padding: 16px;
}

.menu-item:hover{
  background-color: rgba(0,0,0,0.1);
}

@media (max-width: 315px){
  .menu{
    padding-top: 64px;
    flex-direction: column;
    width: 160px;
    height: 100%;
    border-right: 1px solid #000;
    left: -100%;
  }

  #hamburger:checked ~ .menu{
    left: 0;
    transition: left 0.2s ease;
  }
}

@media (min-width: 315px){
  .menu{
    width: 100%;
    border-bottom: 1px solid #000;
  }

  #hamburger ~ label{
    display: none;
  }
}
{% endcapture %}

{% capture html_1 %}
<input type='checkbox' id='hamburger'>
<label for='hamburger'>☰</label>
<div class='menu'>
  <div class='menu-item'><span>Home</span></div>
  <div class='menu-item'><span>Blog</span></div>
  <div class='menu-item'><span>About</span></div>
  <div class='menu-item'><span>Contact</span></div>
</div>
{% endcapture %}
{% include demo-gen.html style=style_1 html=html_1 height=350 resize=60 %}

Above is a little code demo test. What's special about it is that all the markup and styling has only been written once and is displayed both in the highlights and the actual demo; furthermore, it's all written inline in the markdown document and assembled using Jekyll variables and includes.
