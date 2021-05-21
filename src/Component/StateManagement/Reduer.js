export const initState = {
    email:null,
    pass:null,
    fullName:null
}

export const ACTIONS = {
    SET_EMAIL:'set_email',
    SET_PASSWORD: 'set_password',
    SET_NAME:'set_name'
}

// have @
const format = /\S+@\S+\.\S+/

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case ACTIONS.SET_EMAIL:
            if(format.test(action.payload.email)){
                return {...state,email:true}
            }
            else{
                return {...state,email:false}
            }
            case ACTIONS.SET_PASSWORD:
                if(action.payload.pass > 6){
                    return {...state,pass:true}
                }
                else{
                    return {...state,pass:false}
                }
        case ACTIONS.SET_NAME:
            return {...state,fullName:action.payload.name}              
        default:
            return state
    }
}

export default reducer