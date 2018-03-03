/*export const displayLastName = () => {
    console.log("Display last name");
    return{
        type: "GET_LAST",
        payload: "Malhotra"
    }
};*/

export const addItem = (item) => {
    console.log("item to be added", item);
    return {
        type: "ADD_ITEM",
        payload: item
    }
};