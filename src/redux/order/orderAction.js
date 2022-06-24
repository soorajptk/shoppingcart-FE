export const checkaddress=(data)=>{
    console.log(data,"orderAC");
    return {
        type:"CHECKADDRESS",payload:data
    }
}

export const AddAddress=(data)=>{
    return {
        type:"ADDADDRESS",payload:data
    }
}