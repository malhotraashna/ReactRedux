export default function(state={name: "<LastName>"}, action){
    if(action.type === 'GET_LAST'){
        return {
            name: "Malhotra"
        }
    }
    return state;
}