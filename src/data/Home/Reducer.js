export const initialState = {
    basket:[],
    user:null
};

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price +amount, 0);

const Reducer = (state,action) =>{
    console.log(action);    
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(         //Removing by finding Index
                (basketItem) => basketItem.ISBN === action.ISBN
            );
            let newBasket = [...state.basket];

            if(index >=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Cant remove product (ISBN: ${action.ISBN}) as it not in basket!!`
                )
            }

            return {
                ...state,
                basket:newBasket
            }
        
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }


        default:
            return state;
    }
};

export default Reducer;