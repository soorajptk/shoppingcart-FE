

export const Authaction=(data:any)=>{
    return {type:"AUTHENTICATION",payload:data}
}
export const ModalToggle=()=>{
    return {type:"MODALTOGGLE",payload:true}
}
export const CloseToggle=()=>{
    return {type:"CLOSETOGGLE",payload:false}
}
export const LogOut=()=>{
    return {type:"LOGOUT",payload:false}
}