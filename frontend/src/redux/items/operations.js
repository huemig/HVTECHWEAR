import API from "../../API";
import { fetchItemsAction } from "./actions";

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