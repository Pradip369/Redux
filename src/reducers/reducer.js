
const iState = {
    "surname": "kachhadiya",
    "name": "pradip",
    "loder": false
}


const reducer = (state = iState, action) => {

    if (action.type === 'CHANGE_NAME') {
        return {
            ...state,
            'name': action.payload,
            "loder": false
        }
    }
    if (action.type === 'CHANGE_SURNAME') {
        return {
            ...state,
            'surname': action.payload
        }
    }
    return state
}

export default reducer