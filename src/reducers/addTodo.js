let itemId = 0;
export default function(state=[], action){
    console.log("item: ",action.payload)
    if(action.type === 'ADD_ITEM'){
        console.log("added");
        return [
            ...state,
            {
                id: itemId++,
                itemName: action.payload
            }
        ]
    }
    return state;
}