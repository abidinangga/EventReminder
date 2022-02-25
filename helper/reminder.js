const { google, outlook, office365, yahoo, ics } = require("calendar-link");


function calendar(google) {
    const event = {
        title: "REMINDER!",
        description: "Be there!",
        duration: [3, "hour"],
        date: 22/05/2023,
        google
    };
    
}

  module.exports = calendar