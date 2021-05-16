import axios from 'axios';
import { SET_CARD_LIST } from "./types";


//an action creator that returns a function

export function fetchCardList() // this fn is called asynchronously via THunk
{
    return function (dispatch)
    {
        return axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(res => {
                console.log(res);

                dispatch(setCardList(res));

            })
            .catch((error) => {
                console.log(error);
            })
    };
}

function setCardList(res) {
    return {
        type: SET_CARD_LIST,
        payload: res.data.slice(0, 20)
    };
}
