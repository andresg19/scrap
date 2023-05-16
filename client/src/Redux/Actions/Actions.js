import axios from "axios";
import { MELI_RESULTS, TDMIA_RESULTS, EBAY_RESULTS } from "./ActionTypes";

export const meliResults = (product) => {
    return async function (dispatch) {
      try {
        let result = await axios.get(`http://localhost:3001/melisearch?product=${product}`);
        return dispatch({
            type: MELI_RESULTS,
            payload: result.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
};

export const tdmiaResults = (product) => {
  return async function (dispatch) {
    try {
      console.log('entre', product)
      let result = await axios.get(`http://localhost:3001/tdmiasearch?product=${product}`);
      return dispatch({
        type: TDMIA_RESULTS,
        payload: result.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const ebayResults = (product) => {
  return async function (dispatch) {
    try {
      console.log('entre', product)
      let result = await axios.get(`http://localhost:3001/ebaysearch?product=${product}`);
      return dispatch({
        type: EBAY_RESULTS,
        payload: result.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}