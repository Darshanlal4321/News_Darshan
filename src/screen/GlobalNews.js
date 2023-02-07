import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderComponent from '../common/customComponent/HeaderComponent';
import TabComponent from '../common/customComponent/TabComponent';
import CardComponent from '../common/customComponent/CardComponent';
import LinearGradient from 'react-native-linear-gradient';
import SearchComponent from '../common/customComponent/SearchComponent';
import { getSearchNewsData } from '../Redux/action/GetSearchNewsDataAction';
import { useDispatch, useSelector } from 'react-redux';
const GlobalNews = ({ navigation }) => {
    const [newTopic, setNewTopic] = useState();
    const [news, setNews] = useState('')
    const dispatch = useDispatch();
    const newsSearchData = useSelector((state) => state.CreateSearchNews.newsSearchData);
    console.log("news search Data::::::::::---", newsSearchData)
    const AddNewTopic = value => {
        console.log('newTopicValue--->', value);
        setNewTopic(value);
    };

    const searchNewsHandler = () => {
        dispatch(getSearchNewsData(newTopic));
    }

    useEffect(() => {
        if (newsSearchData != null) {
            dispatch(getSearchNewsData("all"))
        }
    }, [])

    useEffect(() => {
        // console.log(newsData, "api response")
        if (newsSearchData != null) {
            setNews(newsSearchData.articles)
        }
    }, [newsSearchData])

    const data = [
        {
            heading: "Winning chances since 2004: 18% for tainted candidates, 11% for clean",
            description: "India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday.",
            source: "Harry Potter",
            date: "20-2-2023"
        },
        {
            heading: "Winning chances since 2004: 18% for tainted candidates, 11% for clean",
            description: "India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday.",
            source: "Harry Potter",
            date: "20-2-2023"
        }
    ]
    return (
        <LinearGradient colors={["#D9D6D2", "#D9D6D2", "#8090A6", "#8090A6"]} style={{ flex: 1 }}>
            <View style={styles.mainView}>
                <HeaderComponent headerTiltle={"Top Global Headlines"} iconName={"filter-outline"} onclickButton={() => navigation.navigate("Setting")} />
                <SearchComponent searchNewsData={AddNewTopic} searchNewsFun={searchNewsHandler} searchNews={newTopic} />
                <CardComponent DATA={news} />
            </View>
        </LinearGradient>
    )
}

export default GlobalNews

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    cardContainer: {
        backgroundColor: '#FFFFFFA5',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 5,
        marginTop: 5,
        padding: 1,
        borderWidth: 5,
        borderColor: '#FFFFFF',
    },
})