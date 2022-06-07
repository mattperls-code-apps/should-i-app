/*
    src/tabs/history/stacks/default.js
*/

import React, { useState, useEffect, useRef } from "react"
import { View, FlatList, RefreshControl, TextInput, StyleSheet, Animated } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import HistoryItem from "../../../components/historyItem"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { getKey } from "../../../scripts/storage"
import filter from "../../../scripts/filter"
import { screen, colors } from "../../../constants"

const HistoryDefaultStack = ({ navigation }) => {
    let [resultsHistory, setResultsHistory] = useState([])
    let [initialized, setInitialized] = useState(false)
    let [refreshing, setRefreshing] = useState(false)

    const refreshResultsHistory = () => {
        setRefreshing(true)
        getKey("resultsHistory", (storedResultsHistory) => {
            setResultsHistory(storedResultsHistory)
            setRefreshing(false)
        })
    }

    let [showBottomBorder, setShowBottomBorder] = useState(false)
    let scrollY = useRef(new Animated.Value(0)).current

    let input = useRef()
    let [searchQuery, setSearchQuery] = useState("")
    let resultsCountOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if(!initialized){
            setInitialized(true)
            refreshResultsHistory()
        }
    }, [initialized])

    useEffect(() => {
        const subscriber = navigation.dangerouslyGetParent().addListener("tabPress", () => {
            refreshResultsHistory()
        })

        return subscriber
    })

    const filteredResultsHistory = filter(searchQuery, resultsHistory)

    return (
        <StackContainer padTop={0} onPress={() => {
            input.current.blur()
        }}>
            <Title top={screen.top} height={15 * screen.height} backgroundColor={colors.darkPurple} bottomBorder={showBottomBorder} fontSize={9 * screen.width}>History</Title>
            <View style={styles.content}>
                <Animated.View style={[styles.searchBarContainer, {
                    transform: [
                        {
                            translateY: scrollY
                        }
                    ]
                }]}>
                    <TextInput style={styles.searchBarInput} ref={input} selectionColor={colors.mediumLightPurple} onChangeText={setSearchQuery} />
                    <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} color={colors.darkPurple} size={25}/>
                </Animated.View>
                <Animated.Text style={[styles.resultsCount, {
                    opacity: resultsCountOpacity
                }]}>
                    {
                        filteredResultsHistory.length
                    } Results Found
                </Animated.Text>
                <FlatList
                    keyboardShouldPersistTaps={"never"}
                    contentInset={{ top: 130 }}
                    contentOffset={{ y: -130 }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshResultsHistory} tintColor={colors.lightPurple}/>
                    } scrollEventThrottle={4} onScroll={(e) => {
                        if(!showBottomBorder && e.nativeEvent.contentOffset.y >= 0){
                            setShowBottomBorder(true)
                        } else if(showBottomBorder && e.nativeEvent.contentOffset.y < 0){
                            setShowBottomBorder(false)
                        }
                        scrollY.setValue(-Math.max(e.nativeEvent.contentOffset.y + 65, 0))
                        resultsCountOpacity.setValue(Math.max(Math.min(1 - (130 + e.nativeEvent.contentOffset.y) / 25, 1), 0))
                    }} style={styles.historyList} contentContainerStyle={styles.historyListContentContainer} showsVerticalScrollIndicator={false} data={filteredResultsHistory} renderItem={(props) => {
                        return <HistoryItem navigation={navigation} refreshResultsHistory={refreshResultsHistory} {...props} />
                    }} keyExtractor={({id}) => id}/>
            </View>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        flex: 1,
        backgroundColor: colors.mediumLightPurple,
        overflow: "hidden"
    },
    searchBarContainer: {
        position: "absolute",
        width: "100%",
        height: 65,
        justifyContent: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: colors.darkPurple,
        zIndex: 2
    },
    searchIcon: {
        marginLeft: 15
    },
    searchBarInput: {
        position: "absolute",
        top: 7.5,
        bottom: 7.5,
        left: 7.5,
        right: 7.5,
        paddingLeft: 45,
        paddingRight: 10,
        borderRadius: 12.5,
        backgroundColor: colors.lightPurple,
        color: colors.mediumPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 18
    },
    resultsCount: {
        position: "absolute",
        top: 80,
        width: "100%",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "400",
        color: colors.lightPurple
    },
    historyListContentContainer: {
        paddingBottom: 1
    }
})

export default HistoryDefaultStack