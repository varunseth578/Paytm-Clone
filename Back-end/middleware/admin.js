const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
// middleware for handling auth
function adminMiddleware(req,res,next){
   const token = req.headers.authorization;
   const words = token.split("");
   const jwtToken = words[1];
   const decodedValue = jwt.verify(jwtToken,secret);
   if (decodedValue.username){
    next();
}else {
    res.status(403).json({
        msg:"you are not authenticated"
    })
}
}
module.exports= adminMiddleware;