export default (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return state = action.payload
        case 'DELETE_ITEM':
            return state = {}
        default:
            return state
    }
}