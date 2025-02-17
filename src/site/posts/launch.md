---
title: GeneticScores.org launch
subtitle: Welcome to the beta release of INTERVENE GeneticScores.org
date: 2024-11-25
tags: posts
layout: layouts/post.njk
meta:
    image: /images/tada.svg
---

{% render '@vf-intro', {"vf_intro_phase": "",
"vf_intro_heading": title,
"vf_intro_lede": "",
"vf_intro_subheading": subtitle,
"vf_intro_badge": {
    "style": [
    "phases"
    ],
    "text": "beta",
    "theme": "primary",
    "badge_href": ""
},
"vf_intro_text": [ "A hub for tools and services to help you develop and apply polygenic scores. Access the PGS Catalog Calculator for calculating polygenic scores from the PGS Catalog, run the calculator locally in your own environment or use our online service.
", "Please note - for this initial release our online calculation service is not accepting sensitive human data yet. It is suitable only for non-sensitive (synthetic or publicly available datasets)."] }
%}


<section class="embl-grid embl-grid--has-centered-content">
    <div>
    </div>
    <div>
        {% markdown %}
        Suitable datasets to test `GeneticScores.org` are [described in our documentation](https://docs.geneticscores.org/data).
        {% endmarkdown %}
    </div>
</section>

