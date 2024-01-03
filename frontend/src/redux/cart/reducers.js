import * as Actions from "./actions"
import initialState from "../store/initialstate"

export const CartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case Actions.FETCH_CART:
            return {
                ...state,
                results: action.payload.cart,

            };
        case Actions.ADD_CART:
            return {
                ...state,
                results: [action.payload.cart, ...state.results]

            };
        case Actions.DELETE_CART:
            return {
                ...state,
                ...action.payload.cart,
                results: state.results.filter(result => result.id !== action.payload.cartId)
            }


    }

}