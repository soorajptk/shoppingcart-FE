
export const Validation=(credentials)=>{
   const {email,password}= credentials
   const err={}
    if(!email)
    {
        err.email="please provide email"
    }
    if(!password || password.length<5){

        err.password='please provide a valid password'
    }
    return err
}

