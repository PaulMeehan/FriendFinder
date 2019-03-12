var friends = [
    {
        "name": "Aaaaa",
        "age": 35,
        "gender": "Male"
    },
    {
        "name": "Bbbbb",
        "age": 45,
        "gender": "Female"
    },
    {
        "name": "Cccccc",
        "age": 55,
        "gender": "Female"
    },
];

console.log(friends);


module.exports = function(app) {
   app.get("/api/friends", function(request, response){
        console.log("in here");
        for (var i=0; i < friends.length; i++) {
            // var newP = "<p>Name: " + friends[i].name + "  Age: " + friends[i].age + "  Gender: " + friends[i].gender + "</p>";
            var newP = `<p>Name:  ${friends[i].name} Age: ${friends[i].age} Gender: ${friends[i].gender}</p>`;
            $(".friendList").append(newP);
        };
   });
};