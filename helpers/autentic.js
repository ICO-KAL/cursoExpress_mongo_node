import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';


export async function generitsToken(email){
    try{
       const clave = await jsonwebtoken.sign({email},process.env.JWT_TOKEN_SECREST,{ expiresIn: '1h'});
       return clave;
    }
    catch(e){
        console.log(e);
    }
}

export async function verificarToken(req,res,next){
    const token = await req.header('Authorization')?.replace('Bearer','');
    console.log(token);

    if(!token){return res.status(401).json({message: "token requerido"})}

    try{
      const verificar = await jsonwebtoken.verify(token,process.env.JWT_TOKEN_SECREST);
      console.log(verificar.email);
      next();
    }catch(e){
       res.status(404).json({message: "token requerido"});        
    }
}