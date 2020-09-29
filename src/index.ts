
import * as AdaptiveCards from "adaptivecards";
import * as ACData from "adaptivecards-templating";
 
// Define a template payload
var templatePayload = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Hello ${name}!"
        },
        {
            "type": "TextBlock",
            "text": "Date is {{DATE(${formatDateTime(dateInput, ' ' )})}}"
        }
    ]
};
 
// Create a Template instance from the template payload
var template = new ACData.Template(templatePayload);
 
// Expand the template with your `$root` data object.
// This binds it to the data and produces the final Adaptive Card payload
var cardPayload = template.expand({
   $root: {
      name: "Mike Allen",
      dateInput: "2020-09-30T00:00:00.000Z"
   }
});
 
// OPTIONAL: Render the card (requires that the adaptivecards library be loaded)
var adaptiveCard = new AdaptiveCards.AdaptiveCard();
adaptiveCard.parse(cardPayload);
document.getElementById('ThisCard').appendChild(adaptiveCard.render());