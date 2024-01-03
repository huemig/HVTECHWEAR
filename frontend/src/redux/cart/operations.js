import API from "../../API";
import { fetchItemsAction } from "./items";

const api = new API()
export const fetchItems = () => {
    return async disptach => {
        return api
            .getItems()
            .then(items => {
                disptach(fetchItemsAction(items))
                console.log(items)
            })
            .catch(error => {
                alert("failed to get items")
            })
    }
}

export const deleteCart = id => {
    return dispatch => {
        return api
            .deleteCart(id)
            .then(() => {
                dispatch(deleteCartAction(id));
            })
            .catch(error => {
                alert('Failed to connect API to delete an item');
                console.log(error);
            });
    };
};

export const addCart = id => {
    return api
        .addCart(id)
        .then(() => {
            dispatch(addCartAction(id));
        })
        .catch(error => {
            alert('Failed to add to cart');
            console.log(error);
        });
};

