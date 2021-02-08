
import * as AdaptiveCards from "adaptivecards";
import * as ACData from "adaptivecards-templating";
 
// Define a template payload
let cardurl = "https://paradigmdownload.blob.core.windows.net/pbiviz/AdaptiveCardDemo/DateTestPlus.json"
fetch(cardurl)
.then(response => response.json())
.then(json => displayTemplate(json))
.catch(function(error) {
    console.log('Request failed', error);
  });

  function displayTemplate(templatePayload) {
 
// Create a Template instance from the template payload
var template = new ACData.Template(templatePayload);
    // Expand the template with your `$root` data object.
// This binds it to the data and produces the final Adaptive Card payload
var cardPayload = template.expand({
   $root: {
      name: "Mike Allen",
      dateInput: "2020-09-30T00:00:00Z"
   }
});
 
// OPTIONAL: Render the card (requires that the adaptivecards library be loaded)
var adaptiveCard = new AdaptiveCards.AdaptiveCard();
adaptiveCard.parse(cardPayload);
document.getElementById('ThisCard').appendChild(adaptiveCard.render());
let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language;
let thisLanguage = "Browser language is: " + lang;
document.getElementById('ThisCard').appendChild(document.createTextNode(thisLanguage));
let vendor = (navigator && navigator.vendor || '').toLowerCase();
let userAgent = (navigator && navigator.userAgent || '').toLowerCase();
let thisBrowser = "Vendor: " + vendor + " UserAgent: " + userAgent;
let p1 = document.createElement("p");
p1.appendChild(document.createTextNode(thisBrowser));
document.getElementById('ThisCard').appendChild(p1);
return;
}