---
layout: comision
title: Comisiones de trabajo del PDR
categories: comisiones
permalink: /comisiones/
---

# **COMISIONES**
<ul>
  {% for post in site.categories.comisiones %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
