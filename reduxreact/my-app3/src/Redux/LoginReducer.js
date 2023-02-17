const initialState = {
    logged:false
}

function LoginReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN-FORM':return{logged:action.payload}
        case 'LOGOUT-FORM':return{logged:action.payload}
        default: return state
    }
}

export default LoginReducer