
export const ADD_CART = 'ADD_CART';
export const addCartAction = cart => {
    return {
        type: ADD_CART,
        payload: { cart }
    };
};
export const FETCH_CART = 'FETCH_CART';
export const fetchCartAction = cart => {
    return {
        type: FETCH_CART,
        payload: { cart }
    };
};
export const DELETE_CART = 'DELETE_CART';
export const deleteCartAction = cartId => {
    return {
        type: DELETE_CART,
        payload: { cartId }
    };
};