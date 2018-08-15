---
layout: post
author: Samson Zhang
title:  "Responsive Hamburger Menu in Pure CSS (No JS)"
date:   2018-08-13 08:00:00 -0400
tags: tutorial pure-css
---

Hamburger menus are a common feature in the design of websites and apps. Being able to hide menu items off to the side yet just an intuitive tap away comes in especially useful for responsive and mobile-friendly designs. Typically functionality involving showing and hiding elements and buttons involves JavaScript; but with a clever trick, it's possible to accomplish this in pure CSS as well.

<!--break-->

## The Final Product

{% highlight html %}
<input type='checkbox' id='hamburger'>
<label for='hamburger'></label>
<div id='hamburger-menu'></div>
{% endhighlight %}

{% highlight css %}
#hamburger{
  display: none;
}

#hamburger-menu{
}

#hamburger:checked ~ #hamburger-menu{
}
{% endhighlight %}

## Thinking Through It

A hamburger menu has two states: retracted (the default) and expanded. These states are toggled between at the press of a button, and during each state applicable code is applied that hides or shows the menu itself. This can easily be coded in JavaScript; without it, though, we have to get a bit clever and use an **HTML checkbox**.

A checkbox automatically has two states, checked and unchecked, and we can access this in CSS using the :checked selector:

{}

Furthermore, we can
