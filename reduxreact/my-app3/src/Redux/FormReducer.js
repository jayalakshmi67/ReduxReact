const initialState ={
    carName:'',
    carModel:'',
    carColor:''
}

function FormReducer(state = initialState,action){
    switch(action.type){
        case 'CARNAME-INPUT':return{...state,carName:action.payload}
        case 'CARMODEL-INPUT':return{...state,carModel:action.payload}
        case 'CARCOLOR-INPUT':return{...state,carColor:action.payload}
        case 'FORM-SUBMIT':return{carName:'',carModel:'',carColor:''}
        default : return state
    }
}

export default FormReducer