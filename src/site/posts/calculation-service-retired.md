---
title: The GeneticScores.org calculation service has been retired
subtitle: Use the PGS Catalog Calculator locally instead
date: 2026-09-09
tags: posts
layout: layouts/post.njk
---

{% render '@vf-intro', {"vf_intro_phase": "",
"vf_intro_heading": title,
"vf_intro_lede": "",
"vf_intro_subheading": subtitle,
"vf_intro_badge": {
    "style": ["phases"],
    "text": "notice",
    "theme": "tertiary",
    "badge_href": ""
},
"vf_intro_text": ["The GeneticScores.org online calculation service has been permanently retired."] }
%}

<section class="embl-grid embl-grid--has-centered-content">
    <div></div>
    <div>
        {% markdown %}
        The service is no longer available and all uploaded data has been deleted.

        The supported alternative is the local-install [PGS Catalog Calculator (`pgsc_calc`)](https://github.com/PGScatalog/pgsc_calc/). Please use its GitHub repository for installation guidance and support.
        {% endmarkdown %}
    </div>
</section>
