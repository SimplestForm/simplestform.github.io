---
layout: post
author: Samson Zhang
title: Responsive Hamburger Menu in Pure CSS (No JS)
date: 2018-9-29 12:00:00 +0000
tags: tutorial pure-css
keyword: css-hamburger
thumb-ext: mp4

---
Hamburger menus are a common feature in the design of websites and apps. Being able to hide menu items off to the side yet just an intuitive tap away comes in especially useful for responsive and mobile-friendly designs. Typically functionality involving buttons and showing and hiding elements involves JavaScript; but with a clever trick, it's possible to accomplish this in pure CSS as well.

<!--break-->

## The Basics

Before we do all the CSS tricks to get a functional hamburger menu, we first need to build the menu itself.

### Flexbox Menu

The HTML for the basic menu is super straightforward, simply a `.menu` container with nested `.menu-item`s.

{% capture html-flex-1 %}
<div class='menu'>
  <div class='menu-item'><span>Home</span></div>
  <div class='menu-item'><span>Blog</span></div>
  <div class='menu-item'><span>About</span></div>
  <div class='menu-item'><span>Contact</span></div>
</div>
{% endcapture %}

{% include html-codeblock.html code=html-flex-1 %}

In the CSS, we first write `position: fixed` and `width: 100%` to make the menu expand horizontally across the screen and stick to the top. Then, `display: flex` makes the menu items stack horizontally instead of vertically; the default value of `flex-direction` is `row`, so we don't even need to specify it.

{% capture css-flex-across %}
.menu{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #000;
  display: flex;
}

.menu-item{
  padding: 16px;
}
{% endcapture %}

{% include demo-gen.html style=css-flex-across html=html-flex-1 hidehtml=true %}

On mobile, we want our menu to be vertical. We just need to change a few lines of code.

`width: 200px` and `height: 100%` make the menu expand to fill the height of the screen but only a certain width. `flex-flow: column nowrap` stacks the items vertically in the menu.

{% capture css-flex-down %}
.menu{
  position: fixed;
  width: 200px;
  height: 100%;
  border-right: 1px solid #000;
  display: flex;
  flex-flow: column nowrap;
}

.menu-item{
  padding: 16px;
}
{% endcapture %}

{% include demo-gen.html style=css-flex-down html=html-flex-1 hidehtml=true %}

Just like that, we've turned our same simple HTML markup from a horizontal desktop menu to a mobile one, ready to be turned into a hamburger menu.

### Making it Responsive

Now we need to combine these two pieces of code into one, making the former apply on desktop and the latter on mobile. We do this using CSS `@media` queries to specify `min-width` and `max-width` conditions.

{% capture css-flex-responsive %}
.menu{
  position: fixed;
  display: flex;
}

.menu-item{
  padding: 16px;
}

@media (min-width: 400px){
  .menu{
    width: 100%;
    border-bottom: 1px solid #000;
  }
}

@media (max-width: 400px){
  .menu{
    width: 200px;
    height: 100%;
    flex-flow: column nowrap;
    border-right: 1px solid #000;
  }
}
{% endcapture %}

{% include demo-gen.html html=html-flex-1 style=css-flex-responsive hidehtml=true resize=60 %}

## Hamburger Functionality

Now, on to the fun part - making the menu pop in and out at the press of a button.

In HTML, we can create a checkbox. In CSS, we can apply some code only when the checkbox is checked; furthermore, we can apply that code to a sibling of the checkbox. In our scenario, by default the menu has some code that hides it from view; when the checkbox is checked, some code is applied that overrides the hiding code and brings the menu into view.

{% capture html-button-1 %}
<input type='checkbox' id='hamburger'>
<label class='menu-button' for='hamburger'>Menu Button</label> <!--clicking on this label does the same thing as clicking on the checkbox-->
<div class='menu'>
  <div class='menu-item'><span>Home</span></div>
  <div class='menu-item'><span>Blog</span></div>
  <div class='menu-item'><span>About</span></div>
  <div class='menu-item'><span>Contact</span></div>
</div>
{% endcapture %}

{% capture css-button-1 %}
.menu{
  position: fixed;
  top: 0;
  left: -200px; /* hides the menu from view by default \*/
  width: 200px;
  height: 100%;
  border-right: 1px solid #000;
  display: flex;
  flex-flow: column nowrap;
  transition: left 0.2s ease; /* make the menu animate as it moves back and forth \*/
}

.menu-button{
  position: relative;
  z-index: 5; /* make the button sit on top of the menu so it remains clickable. See our article on z-index to learn more \*/
}

#hamburger:checked ~ .menu{
  left: 0; /* when our checkbox #hamburger is checked, bring its sibling .menu back into view \*/
}

.menu-item{
  padding: 16px;
}
{% endcapture %}

{% include demo-gen.html html=html-button-1 style=css-button-1 %}

## Putting it All Together

{% capture html-final %}
<input type='checkbox' id='hamburger'>
<label class='menu-button' for='hamburger'>☰</label>
<div class='menu'>
  <div class='menu-item'><span>Home</span></div>
  <div class='menu-item'><span>Blog</span></div>
  <div class='menu-item'><span>About</span></div>
  <div class='menu-item'><span>Contact</span></div>
</div>
{% endcapture %}

{% capture css-final %}
.menu-item{
  padding: 16px;
}

.menu{
  position: fixed;
  top: 0;
  display: flex;
  transition: left 0.2s ease; /* make the menu animate as it moves back and forth \*/
}

.menu-item, .menu-button{
  display: inline-block;
  font-family: sans-serif;
  padding: 16px;
  cursor: pointer;
}

.menu-item:hover{
  background-color: #eee;
}

#hamburger{
  display: none;
}

@media (min-width: 400px){
  .menu{
    width: 100%;
    border-bottom: 1px solid #000;
  }

  .menu-button{
    display: none;
  }
}

@media (max-width: 400px){
  .menu{
    padding-top: 49px;
    left: -200px; /* hides the menu from view by default \*/
    width: 200px;
    height: 100%;
    flex-flow: column nowrap;
    border-right: 1px solid #000;
  }

  #hamburger:checked ~ .menu{
    left: 0; /* when our checkbox #hamburger is checked, bring its sibling .menu back into view \*/
  }

  .menu-button{
    position: relative;
    z-index: 5; /* make the button sit on top of the menu so it remains clickable. See our article on z-index to learn more \*/
  }
}
{% endcapture %}

{% include demo-gen.html html=html-final style=css-final resize=60 height=300 %}
