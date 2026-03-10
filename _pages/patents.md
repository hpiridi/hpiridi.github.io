---
layout: page
permalink: /patents/
title: patents
description: Granted and pending patents.
nav: true
nav_order: 2
---

<!-- _pages/patents.md -->

<div class="publications">

{% assign patents_by_year = site.data.patents | group_by: "date_filed" | sort: "name" | reverse %}

{% for year_group in patents_by_year %}

<h2 class="bibliography">{{ year_group.name }}</h2>

<ol class="bibliography">
{% for patent in year_group.items %}
  <li>{% include patent_entry.liquid patent=patent %}</li>
{% endfor %}
</ol>

{% endfor %}

</div>
