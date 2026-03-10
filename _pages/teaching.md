---
layout: page
permalink: /teaching/
title: teaching
description: Courses, workshops, and mentoring.
nav: false
nav_order: 5
---

{% for teaching in site.teachings %}
<div style="margin-bottom: 2rem;">
  <h3>
    {% if teaching.url %}
      <a href="{{ teaching.url | relative_url }}">{{ teaching.title }}</a>
    {% else %}
      {{ teaching.title }}
    {% endif %}
  </h3>
  {% if teaching.year %}<p style="font-size: 0.9rem; color: var(--global-text-color-light);">{{ teaching.year }}{% if teaching.institution %} · {{ teaching.institution }}{% endif %}</p>{% endif %}
  {% if teaching.description %}<p>{{ teaching.description }}</p>{% endif %}
</div>
{% endfor %}
