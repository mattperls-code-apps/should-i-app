/*
    src/tabs/home/index.js
*/

import React, { useState, useEffect } from "react"
import Default from "./stacks/default"
import GettingStarted from "./stacks/gettingStarted"
import SectionGuide from "./stacks/sectionGuide"
import QuestionInput from "./stacks/questionInput"
import RatingsInput from "./stacks/ratingsInput"
import InputHelp from "./stacks/inputHelp"
import Results from "./stacks/results"
import { createStackNavigator } from "@react-navigation/stack"
import haptic from "../../scripts/haptics"
import { defaultValue } from "../../scripts/input"

const Home = ({ route, navigation }) => {
    let [initializedDefaults, setInitializedDefaults] = useState(false)
    let [defaults, setDefaults] = useState({})
    let [input, setInput] = useState({})
    let [index, setIndex] = useState(0)

    useEffect(() => {
        const subscriber = navigation.addListener("tabPress", () => {
            haptic("impactLight")
        })

        return subscriber
    }, [])

    useEffect(() => {
        if(!initializedDefaults){
            defaultValue((storedDefaults) => {
                setDefaults(storedDefaults)
                setInput(storedDefaults)
                setInitializedDefaults(true)
            })
        }
    }, [initializedDefaults])

    useEffect(() => {
        if(route?.params?.input){
            setInput(route.params.input)
            navigation.setParams({ input: undefined })
            navigation.navigate("Home", {
                screen: "QuestionInput"
            })
        }
    }, [route])

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Default"} screenOptions={{
            gestureResponseDistance: 20,
            headerShown: false
        }}>
            <Stack.Screen name={"Default"}>
                {
                    ({ navigation }) => initializedDefaults && <Default navigation={navigation} input={input} setInput={setInput} defaults={defaults} setDefaults={setDefaults} />
                }
            </Stack.Screen>
            <Stack.Screen name={"GettingStarted"} component={GettingStarted} />
            <Stack.Screen name={"SectionGuide"}>
                {
                    ({ navigation, route }) => initializedDefaults && <SectionGuide navigation={navigation} route={route} setIndex={setIndex} />
                }
            </Stack.Screen>
            <Stack.Screen name={"QuestionInput"}>
                {
                    ({ navigation }) => initializedDefaults && <QuestionInput navigation={navigation} input={input} setInput={setInput} index={index} setIndex={setIndex} defaults={defaults} />
                }
            </Stack.Screen>
            <Stack.Screen name={"RatingsInput"}>
                {
                    ({ navigation }) => initializedDefaults && <RatingsInput navigation={navigation} input={input} setInput={setInput} index={index} setIndex={setIndex} defaults={defaults} />
                }
            </Stack.Screen>
            <Stack.Screen name={"InputHelp"} component={InputHelp} />
            <Stack.Screen name={"Results"}>
                {
                    ({ navigation }) => initializedDefaults && <Results navigation={navigation} input={input} />
                }
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Home