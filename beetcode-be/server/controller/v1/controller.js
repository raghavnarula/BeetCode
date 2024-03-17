// All API's are present here...
// They can also be called handlers 
// Are the functions executed when the routes are matched..
const jwt = require('jsonwebtoken');
const User = require('../../model/User');

exports.homeAPI = (req,res)=>{
    res.json('Hello world')
}

exports.usersAPI = (req,res)=>{
    res.json({
        "raghav":"narula",
        "github":"gupta"
    })
}

exports.login = (req,res)=>{
    const request_data = req.body
    console.log(request_data)

    const user = new User(request_data);

    if (request_data["type"] === "signup") {
        user.save()
            .then(savedUser => {
                console.log('User added successfully:', savedUser);
                res.json({'message':'ok'})
            })
            .catch(err => {
                res.json({'message':'Internal Server Error'})
            });
    }


    else{
        User.findOne({ username: request_data["username"] })
        .then(user => {
            if (user) {
            var token = jwt.sign(request_data, 'raghav',{ expiresIn: '10min' })
            res.json({'token':token,'message':'ok',})
            // res.json({'message':'ok'}) 
            } 
            else {
            res.json({'message':'not found'})
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
        });
    }
}