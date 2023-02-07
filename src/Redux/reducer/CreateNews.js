import { constantType as type } from "../Constant";

const initialState = {
    newsData: [],
    loaderSuccess: false,
}

export const CreateNews = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_NEWS_DATA: {
            console.log("REducer---->>")
        }
        case type.GET_NEWS_DATA_SUCCESS: {
            return {
                ...state,
                newsData: action.newsData
            }
        }
        case type.LOADER_SUCCESS_TRUE: {
            console.log('Called FOr loader open')

            return {
                loaderSuccess: true
            }
        }
        case type.LOADER_SUCCESS_FALSE: {
            console.log('Called FOr loader close')
            return {
                loaderSuccess: false
            }
        }
        default: return state;
    }

}