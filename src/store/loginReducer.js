const INITIAL_STATE = {
    username: 'admin',
    password:'password',
    isLogged:false,
    counterUser: 0,
    currentUser:{
        username: '',
    }
}

const loginReducer = (state=INITIAL_STATE, action) => {

    if(action.type==="REGISTRA"){
        return {
            ...state,
            counterUser: state.counterUser++,
        }
    }

    if(action.type==="ACCEDI") {
        return {
            ...state,
            isLogged:true,
            currentUser:{
                username: action.payload,
            }
        }
    }

    if(action.tyoe==="LOGOUT") {
        return {
            ...state,
            isLogged:false,
        }
    }

    if(action.type==="FAIL_LOGIN"){
        return {
            ...state,
            isLogged:false,
        }
    }

    return state;
}

export default loginReducer;