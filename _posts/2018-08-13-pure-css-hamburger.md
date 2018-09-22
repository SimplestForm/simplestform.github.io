---
layout: post
author: Samson Zhang
title:  "Responsive Hamburger Menu in Pure CSS (No JS)"
date:   2018-08-13 08:00:00 -0400
tags: tutorial pure-css
keyword: css-hamburger
---

Hamburger menus are a common feature in the design of websites and apps. Being able to hide menu items off to the side yet just an intuitive tap away comes in especially useful for responsive and mobile-friendly designs. Typically functionality involving buttons and showing and hiding elements involves JavaScript; but with a clever trick, it's possible to accomplish this in pure CSS as well.

<!--break-->

## Thinking Through It

A hamburger menu has two states: open and closed. Instead of trying to create this behavior ourselves, we can utilize an HTML checkbox. This element can be checked or unchecked, and we can apply styles to show and hide using the `:checked` selector in CSS. Thus, we can come up with a most basic outline where text is hidden by default and shown when a checkbox is checked:

{% highlight html %}
<input type='checkbox' id='hamburger'>
<div id='hamburger-menu'>
  Contents of menu
</div>
{% endhighlight %}

{% highlight css %}
#hamburger-menu{
  display: none;
}

#hamburger:checked ~ #hamburger-menu{
  display: block;
}
{% endhighlight %}

{% include demo.html filename='1' %}

Essentially, this is all that there is to a hamburger menu. `display: none` can be replaced with whatever code you want to hide your menu, and `display: block` whatever you want to show it. Something else we can do is visually replace the checkbox with a `label`, letting us make the actual button look however we want. Let's take a look at some examples for how we can improve our menu.

## Building Up

### Custom Button Icon

This is a very simple change. As mentioned previously, we added a `label` and linked it to our checkbox with `for='hamburger'`. Pressing on this label checks and unchecks the checkbox; we can now add `display: none;` to our checkbox, leaving only the label.

{% highlight html %}
<input type='checkbox' id='hamburger'>
<label for='hamburger'>☰ Menu</label>
<div id='hamburger-menu'>
  Contents of menu
</div>
{% endhighlight %}

{% highlight css %}
label{
  cursor: pointer;
}

#hamburger{
  display: none;
}

#hamburger-menu{
  display: none;
}

#hamburger:checked ~ #hamburger-menu{
  display: block;
}
{% endhighlight %}

{% include demo.html filename='2' %}

### Simple Animation

As mentioned earlier, we can change our show/hide code to anything we want. To add a simple animation, we can change our hide code to `position: relative; left: -100%`. Percentage is relative to width of the element, so this will always completely hide the element.

`left: 0;` will bring the menu right back, and adding `transition: left 0.2s ease;` will make the `left` property animate between the two smoothly.

{% highlight html %}
<!--NOT CHANGED-->
<input type='checkbox' id='hamburger'>
<label for='hamburger'>☰ Menu</label>
<div id='hamburger-menu'>
  Contents of menu
</div>
{% endhighlight %}

{% highlight css %}
label{
  cursor: pointer;
}

#hamburger{
  display: none;
}

#hamburger-menu{
  position: relative;
  left: -100%;
  transition: left 0.2s ease;
}

#hamburger:checked ~ #hamburger-menu{
  left: 0;
}
{% endhighlight %}

{% include demo.html filename='3' %}

### Variation: Right Side menu

What if you want your menu on the right? All you have to do is change a few CSS properties:

{% highlight html %}
<!--NOT CHANGED-->
<input type='checkbox' id='hamburger'>
<label for='hamburger'>☰ Menu</label>
<div id='hamburger-menu'>
  Contents of menu
</div>
{% endhighlight %}

{% highlight css %}
label{
  cursor: pointer;
  display: block;
  margin-left: auto;
}

#hamburger{
  display: none;
}

#hamburger-menu{
  width: 300px;
  position: relative;
  right: -100%;
  transition: right 0.2s ease;
}

#hamburger:checked ~ #hamburger-menu{
  right: 0;
}
{% endhighlight %}

{% include demo.html filename='3b' %}

### Styling

At this point we've gone through all the main HTML and CSS tricks to make this work. From here we can add whatever content and CSS styling we want.

{% highlight html %}
<input type='checkbox' id='hamburger'>
<label for='hamburger'>☰ Menu</label>
<div id='hamburger-menu'>
  <div><span>Item 1</span></div>
  <div><span>Item 2</span></div>
  <div><span>Item 3</span></div>
</div>
{% endhighlight %}

{% highlight css %}
body{
  font-family: sans-serif;
}

label{
  cursor: pointer;
  z-index: 5;
}

#hamburger{
  display: none;
}

#hamburger-menu{
  position: fixed;
  top: 0;
  left: -100%;
  transition: left 0.2s ease;
  width: 400px;
  height: 100%;
  background-color: #eee;
  border-right: 12px solid #222;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

#hamburger:checked ~ #hamburger-menu{
  left: 0;
}
{% endhighlight %}

{% include demo.html filename='4' %}

## Limitations

Unfortunately, because we're using specific tricks with CSS, there are a few limitations to this implementation. It's important to have these in mind so you know whether it'll fit with your project.

FIrstly, we use the following selector: `#hamburger:checked ~ #hamburger-menu`. `~` is the **general sibling** selector. Our line of code therefore means, "[all elements with id `hamburger-menu`] after and sharing the parent of [any elements with id `hamburger` that are in a checked state]." This means that, for our code to work, your actual menu must have the same parent container as your button. So the following code **would not work**:

{% highlight html %}
<div class='topbar'></div>
  <input type='checkbox' id='hamburger'>
  <label for='hamburger'>Menu</label>
</div>
<div id='hamburger-menu'>
  Content of menu
</div>
{% endhighlight %}

Of course, if your menu has `position: absolute` or `position: fixed` it wouldn't really matter if they're in the same container as your button. But if some changing code needs to be applied to the parent, say if it needs to be hidden on mobile, it can get very cumbersome to override the styles above it.

This isn't specific to this article either. CSS does not have a `element:checked -> some other element` selector, only specifying relations like sibling (`~, +`) and child (`>`). Thus, any pure CSS solution using the checkbox trick will run into this problem.
