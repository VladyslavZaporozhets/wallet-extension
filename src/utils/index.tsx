export enum PageStatus {
    SIGNIN = 'signin',
    SIGNUP = 'signup',
    MAIN   = 'main',
}

export interface User{
    address : string,
    key : string
}


export const Encode = (str:string,keys:number[])=>{
    var enc_name = ""
   
    for(var i = 0 ; i < str.length ; i ++ ){
        enc_name += String.fromCharCode((str.charCodeAt(i) + keys[i%9]%256)%256)
    }
    return enc_name
}
export const Decode = (str:string,keys:number[])=>{
    var dec_name = ""
   
    for(var i = 0 ; i < str.length ; i ++ ){
        var c = str.charCodeAt(i) - keys[i%9]%256
        if (c < 0) c += 256
        dec_name += String.fromCharCode(c%256)
    }
    return dec_name
}