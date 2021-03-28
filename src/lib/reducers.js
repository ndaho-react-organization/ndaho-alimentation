import { actions } from './actions'

const { ADD_TO_CART, SAVE_CART, UPDATE_CART, REMOVE_FROM_CART } = actions 

const initialState = {
    items: []
};

export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, { items: [...state.items, action.payload] });

        case UPDATE_CART:
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.id === action.payload.item.id
                        ? Object.assign({}, item, {
                            quantity: action.payload.quantity
                        })
                        : item;
                })
            });

        case REMOVE_FROM_CART:
            return Object.assign({}, state, {
                items: state.items.filter(item => {
                    return item.id !== action.payload.id;
                })
            });

        // case SAVE_CART:
        //     saveToLocalstorage(action.payload.items);
        //     return Object.assign({}, state, { items: action.payload.items });

        // obligatoire, il faut toujours retourne le state par default
        default:
            return state;
    }
}