import initialState from '../store/initialstatee'
import * as Actions from './actions'


export const ItemsReducer = (state = initialState.items, action) => {
    switch (action.type) {
        case Actions.FETCH_ITEMS:
            return {
                ...state,
                results: action.payload.items
            };
        default:
            return state;
    }
}