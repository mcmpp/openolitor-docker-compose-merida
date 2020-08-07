'use strict';

function getConfig() {
  var fullHostname = window.location.hostname;
  var instance = fullHostname.replace(".{{domain}}", "");

  var env = "{{env}}";
  {% for csa in csas %}
  {%- if csa.env -%}
  if(instance == "{{csa.name}}") {
    env = "{{csa.env}}";
  }
  {%- endif -%}
  {% endfor %}

  return {
    "API_URL": "http://" + fullHostname + ":8080/api-" + instance + "/",
    "API_WS_URL": "http://" + fullHostname + ":8080/api-" + instance + "/ws",
    "ENV": env,
    "version": "{{release_kundenportal}}",
    "AIRBREAK_API_KEY": "{{frontendAirbreakApiKey}}",
    "AIRBREAK_URL": "{{airbreakUrl}}",
    "sendStats": true
  };
}
