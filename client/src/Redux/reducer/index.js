import { EBAY_RESULTS, TDMIA_RESULTS } from "../Actions/ActionTypes";

const initialState = {
// meliResults: [],
tdmiaResults: [],
ebayResults: [],
status: false,
};

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        // case MELI_RESULTS:
    
        //     return {
        //         ...state,
        //         meliResults: payload,
        //     }
        case TDMIA_RESULTS:
            return {
                ...state,
                tdmiaResults: payload,
            }
        case EBAY_RESULTS:
            return {
                ...state,
                ebayResults: payload,
            }

        default:
            return state;
    };
};