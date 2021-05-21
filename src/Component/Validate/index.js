export const ValidateEmail= (Email)=>{
    const format = /\S+@\S+\.\S+/
    return format.test(Email)
}

export const ValidatePass= (Pass)=>{
    return Pass.length > 6
}
