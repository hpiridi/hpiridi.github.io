---
layout: page
permalink: /patents/
title: patents
description: Granted and pending patents.
nav: true
nav_order: 2
---

<div class="patents">
{%- for patent in site.data.patents %}
<div class="patent-entry" style="margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--global-divider-color);">
  <h3 style="margin-bottom: 0.3rem;">{{ patent.title }}</h3>
  <div style="margin-bottom: 0.5rem;">
    <span class="badge" style="
      background-color: {% if patent.status == 'granted' %}#28a745{% elsif patent.status == 'pending' %}#ffc107{% else %}#6c757d{% endif %};
      color: {% if patent.status == 'pending' %}#333{% else %}#fff{% endif %};
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      text-transform: uppercase;
    ">{{ patent.status }}</span>
    {% if patent.number %}<span style="margin-left: 0.5rem; font-family: monospace;">{{ patent.number }}</span>{% endif %}
  </div>
  <div style="font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 0.3rem;">
    <strong>Inventors:</strong> {{ patent.inventors | join: ", " }}
  </div>
  {% if patent.date_granted %}
  <div style="font-size: 0.85rem; color: var(--global-text-color-light);">
    <strong>Filed:</strong> {{ patent.date_filed }} &middot; <strong>Granted:</strong> {{ patent.date_granted }}
  </div>
  {% elsif patent.date_filed %}
  <div style="font-size: 0.85rem; color: var(--global-text-color-light);">
    <strong>Filed:</strong> {{ patent.date_filed }}
  </div>
  {% endif %}
  {% if patent.abstract %}
  <details style="margin-top: 0.5rem;">
    <summary style="cursor: pointer; font-size: 0.9rem; color: var(--global-theme-color);">Abstract</summary>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">{{ patent.abstract }}</p>
  </details>
  {% endif %}
  {% if patent.link and patent.link != "" %}
  <a href="{{ patent.link }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.9rem;">View Patent &rarr;</a>
  {% endif %}
</div>
{%- endfor %}
</div>
