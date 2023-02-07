import { constantType as types } from "../Constant";
export const getNewsData = (topic) => {

    return {
        type: types.GET_NEWS_DATA,
        topic: topic,
    }
}