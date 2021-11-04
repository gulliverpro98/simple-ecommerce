
const INITIAL_STATE = {

    beers: [],
    counter: 0,
    quantity: 0,
    showAvviso: false,
    showLogin: false,
    currentPage: 'catalogo',
    success:false,
    idResult: '',


}

const carrelloReducer = (state=INITIAL_STATE, action) => {

    if(action.type==="INCREMENTA"){

        return {
             
                ...state,
                beers: [action.payload, ...state.beers],
                counter: state.counter + action.value,
                quantity: action.payload,
            // name: action.payload.name,
            // image: action.payload.image,
            // price: action.payload.price,
            // alcohol: action.payload.alcohol,
            // description: action.payload.description
        }
    }
    

    if(action.type==='SVUOTA'){

        return INITIAL_STATE;
    }

    if(action.type==='MOSTRA AVVISO'){

        return state.showAvviso = true;
    }

    if(action.type==='MOSTRA_LOGIN'){
        return {
            ...state,
            currentPage: 'login',
        }
    }
    
    if(action.type==='MOSTRA_CARRELLO'){
        return {
            ...state,
            currentPage: 'carrello',
        }
    }

    if(action.type==='MOSTRA_CATALOGO'){
        return {
            ...state,
            currentPage: 'catalogo',
        }
    }

    if(action.type==="MOSTRA_REGISTRATI"){
        return{
            ...state,
            currentPage: 'registrati',
        }
    }

    if(action.type==="MOSTRA_CHECK"){
        return{
            ...state,
            currentPage: 'checkRegistrati',
        }
    }

    if(action.type==="MOSTRA_SUCCESS"){
        return{
            ...state,
            success:true,
        }
    }


    return state;
}

export default carrelloReducer;