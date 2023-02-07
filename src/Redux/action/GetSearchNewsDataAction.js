import { constantType as types } from "../Constant";
export const getSearchNewsData = (topic) => {

    return {
        type: types.GET_SEARCH_NEWS_DATA,
        topic: topic,
    }
}