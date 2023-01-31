import { BadRequest } from "../errors/index.js";

const testUser = (req,res,next) => {
    if(req.user.testUser){
        throw new BadRequest('Test User does not have a permission to do this operation')
    }
    next()
}

export default testUser
