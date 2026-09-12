import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

export default async function generitsToken(email){
    try{
       return await jsonwebtoken.sign({email},process.env.JWT_TOKEN_SECREST,{ expiresIn: '1h'})
    }
    catch(e){
        console.log(e);
    }
}