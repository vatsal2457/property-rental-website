import jwt from 'jsonwebtoken';

function verifyJWT(req,res,next){
   
    const token = req?.cookies?.token;
    if(!token) return res.status(401).json({message:'Unauthorized'})
    
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
    if(!decodedToken) return res.status(401).json({message:'Unauthorized'})

    next();
}
export{
    verifyJWT,
}