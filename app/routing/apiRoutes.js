var friendData = require("../data/friends.js");

// =============================================================
// Routes
// =============================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function(req, res) {
        // let inputScores = req.body.scores;
        // let friendDataScores = friendData.scores;
        // var closestmatch ={};
        // let checkmatch = 0;
        // var closestmatchscore = 100;
        // function absSum(array1){
        //     let sum;
        //     for(let j = 0; j<array1.length; j++){
        //         sum += Math.abs(array1[j] - 5)
        //     }
        //     return sum;
        // }
        // function compare(x, y){
        //     if(x<y){
        //         closestmatchscore = checkmatch;
        //         closestmatch = friendData;
        //     }
        // }

        // function loopFriendData(friendData){     
        //     for (let i = 0; i<friendData.length; i++){

        //     console.log(checkmatch);
        //      checkmatch = absSum(inputScores)}
        // console.log("Friend data", friendData);
        // console.log("Friend data score", friendData[0].scores);
        // console.log("Input Score", req.body.scores);
   
            // if (checkmatch < closestmatchscore){
            //     closestmatchscore = checkmatch;
            //     closestmatch = friendData[i]
            // }

        }
        console.log(closestmatch);
        friendData.push(req.body);
        res.json(closestmatch);
    });
}