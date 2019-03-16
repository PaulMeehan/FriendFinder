const path = require("path");

module.exports = function(app) {
    // Route to the survey page.
    app.get("/survey", function (req, res) {
        console.log("A");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("B");
    });

    // Route to the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


};

