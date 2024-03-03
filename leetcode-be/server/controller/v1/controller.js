// All API's are present here...
// They can also be called handlers 
// Are the functions executed when the routes are matched..

exports.homeAPI = (req,res)=>{
    res.json('Hello world')
}

exports.usersAPI = (req,res)=>{
    res.json({
        "raghav":"narula",
        "github":"gupta"
    })
}