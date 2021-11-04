const INITIAL_STATE = {

    displayed: false


}

const showCarrelloReducer = (state=INITIAL_STATE, action) => {

    if(action.type==="MOSTRA"){

        return {
            displayed: true
        }
    }

    if(action.type ==='NASCONDI'){

        return INITIAL_STATE;
    }

    return state;
}


export default showCarrelloReducer;