import jwt from 'jsonwebtoken'
import { UnAuthenticated } from "../errors/index.js";

const authenticateUser = (req,res,next) => {
    console.log(req.cookies)
    const token = req.cookies.token
    if(!token){
        throw new UnAuthenticated('Authentication Invalid')
    }
    // const authHeader = req.headers.authorization;
    // if(!authHeader || !authHeader.startsWith('Bearer ')){
    //     throw new UnAuthenticated('Authentication invalid')
    // }
    //const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        const testUser = payload.userId === '63d8a7c3b10b5d2381c7c693'
        req.user = {userId: payload.userId, testUser}
        next()
    } catch(error) {
        throw new UnAuthenticated('Authentication Invalid')
    }
   
}

export default authenticateUser