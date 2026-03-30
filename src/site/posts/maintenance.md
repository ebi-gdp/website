---
title: Calculation service under extended maintenance
subtitle: GeneticScores.org will be temporarily unavailable
date: 2026-03-30
tags: posts
layout: layouts/post.njk
meta:
    image: /images/maintenance.svg
---

{% render '@vf-intro', {"vf_intro_phase": "",
"vf_intro_heading": title,
"vf_intro_lede": "",
"vf_intro_subheading": subtitle,
"vf_intro_badge": {
    "style": [
    "phases"
    ],
    "text": "notice",
    "theme": "tertiary",
    "badge_href": ""
},
"vf_intro_text": [ "The GeneticScores.org calculation service is undergoing extended maintenance and will be temporarily unavailable. We apologise for any inconvenience this may cause."] }
%}


<section class="embl-grid embl-grid--has-centered-content">
    <div>
    </div>
    <div>
        {% markdown %}
        If you have any questions or concerns, please contact us at [intervene-helpdesk@ebi.ac.uk](mailto:intervene-helpdesk@ebi.ac.uk).

        **Important:** Any data previously uploaded to the service will be automatically deleted according to our [data retention policy](https://docs.geneticscores.org/data/processing#data-retention). Please refer to our documentation for more details on how we handle data.

        We appreciate your patience as we work to improve the service.
        {% endmarkdown %}
    </div>
</section>
