// All API's are present here...
// They can also be called handlers 
// Are the functions executed when the routes are matched..

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
    res.send('Post Request Received')

    if (request_data["type"] == "signup"){
        console.log("raghav")
    }

    // User.findOne({ username: request_data["username"] })
    // .then(user => {
    //     if (user) {
    //     console.log('User found:', user);
    //     } else {
    //     console.log('User not found');
    //     }
    // })
    // .catch(err => {
    //     console.error('Error finding user:', err);
    // });

    // // Create a new user instance
    // console.log("here")
    // const newUser = new User({
    //     username: "john_doe",
    //     password: "password123",
    // });
    
    // // Save the user to the database
    // newUser.save()
    //     .then(user => {
    //     console.log('User added successfully:', user);
    //     })
    //     .catch(err => {
    //     console.error('Error adding user:', err);
    //     });

}