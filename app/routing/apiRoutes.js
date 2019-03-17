const friendsData = require("../data/friends.js");

const path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(request, response){
        response.json(friendsData);
    });


    function objectToArray (inObject) {
        var tempArray = [];
        tempArray.push(inObject.name);
        tempArray.push(inObject.image);
        tempArray.push(inObject.Q1);
        tempArray.push(inObject.Q2);
        tempArray.push(inObject.Q3);
        tempArray.push(inObject.Q4);
        tempArray.push(inObject.Q5);
        tempArray.push(inObject.Q6);
        tempArray.push(inObject.Q7);
        tempArray.push(inObject.Q8);
        tempArray.push(inObject.Q9);
        tempArray.push(inObject.Q10);

        return tempArray;
    };


    app.post ("/api/friends", function(request, response) {

        var newFriend = objectToArray(request.body);
        var minScore = 41;
        var bestMatch = -1;

        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = objectToArray(friendsData[i]);
            var score = 0;
            for (var j = 2; j < 11; j++) {
                score = score + Math.abs(currentFriend[j] - newFriend[j]);
            };

            if (score < minScore) {
                bestMatch = i;
                minScore = score;
            };
        };

        friendsData.push(request.body);

        var imageFile = "images/" + friendsData[bestMatch].image;
        console.log("image file = " + imageFile);

        response.json({ match: true, score: minScore, name: friendsData[bestMatch].name, image: imageFile});
    });
};