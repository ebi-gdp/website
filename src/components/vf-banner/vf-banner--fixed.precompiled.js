/**
 * Precompiled Nunjucks template: vf-banner--fixed.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-banner--fixed"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "context")) {
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"banner__text");
frame.set("banner__text", t_1, true);
if(frame.topLevel) {
context.setVariable("banner__text", t_1);
}
if(frame.topLevel) {
context.addExport("banner__text", t_1);
}
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"banner__tou_href");
frame.set("banner__tou_href", t_2, true);
if(frame.topLevel) {
context.setVariable("banner__tou_href", t_2);
}
if(frame.topLevel) {
context.addExport("banner__tou_href", t_2);
}
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"banner__privacy_href");
frame.set("banner__privacy_href", t_3, true);
if(frame.topLevel) {
context.setVariable("banner__privacy_href", t_3);
}
if(frame.topLevel) {
context.addExport("banner__privacy_href", t_3);
}
;
}
output += "<!-- dismissible banner -->\n<div class=\"vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice\"\ndata-vf-js-banner\ndata-vf-js-banner-state=\"dismissible\"\ndata-vf-js-banner-button-text=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "banner__text"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-cookie-name=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "service") - runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-cookie-version=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "data") - runtime.contextOrFrameLookup(context, frame, "protection") - runtime.contextOrFrameLookup(context, frame, "version"), env.opts.autoescape);
output += "\"\ndata-vf-js-banner-auto-accept=\"false\">\n  <div class=\"vf-banner__content | vf-grid\" data-vf-js-banner-text>\n    <p class=\"vf-banner__text vf-banner__text--lg\">\n      This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class=\"vf-banner__link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "banner__privacy_href"), env.opts.autoescape);
output += "\">Privacy Notice</a> and <a class=\"vf-banner__link\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "banner__tou_href"), env.opts.autoescape);
output += "\">Terms Of Use</a>.\n    </p>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
