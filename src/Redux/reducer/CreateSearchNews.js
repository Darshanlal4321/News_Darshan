import { constantType as type } from "../Constant";

const initialState = {
    newsSearchData: []
}

export const CreateSearchNews = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_SEARCH_NEWS_DATA_SUCCESS: {
            console.log(" action.newsSearchData::::::::::>>>>>>>", action.newsSearchData)
            return {
                ...state,
                newsSearchData: action.newsSearchData
            }
        }
        default: return state;
    }

}