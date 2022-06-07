/*
    App.js
*/

import React, { useState, useEffect } from "react"
import { View } from "react-native"
import Start from "./src/tabs/start/index"
import Home from "./src/tabs/home/index"
import History from "./src/tabs/history/index"
import Settings from "./src/tabs/settings/index"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHome, faHistory, faCog } from "@fortawesome/free-solid-svg-icons"
import { initialize } from "./src/scripts/storage"
import { screen, colors } from "./src/constants"

const App = () => {
    let [initialized, setInitialized] = useState(false)

    useEffect(() => {
        if(!initialized){
            initialize(() => {
                setInitialized(true)
            })
        }
    }, [initialized])

    const Tab = createBottomTabNavigator()

    return initialized && (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={"Start"} lazy={false} tabBarOptions={{
                showLabel: false,
                style: {
                    height: Math.max(screen.bottom + 60, 80),
                    backgroundColor: colors.darkPurple,
                    borderTopWidth: 0
                },
                tabStyle: {
                    height: Math.max(60 + screen.bottom, 80),
                    paddingTop: 5,
                    paddingBottom: screen.bottom
                },
                activeBackgroundColor: colors.extraDarkPurple,
                inactiveTintColor: colors.lightPurple,
                activeTintColor: colors.extraLightPurple
            }} screenOptions={({route}) => {
                return {
                    tabBarIcon: ({color}) => {
                        let icon
                        if(route.name == "Home"){
                            icon = faHome
                        } else if(route.name == "History"){
                            icon = faHistory
                        } else {
                            icon = faCog
                        }
                        return <FontAwesomeIcon icon={icon} size={32} color={color} />
                    }
                }
            }}>
                <Tab.Screen name={"Start"} options={{
                    tabBarVisible: false,
                    tabBarButton: () => <View style={{ display: "none" }} />
                }} component={Start} />
                <Tab.Screen name={"Home"} component={Home}/>
                <Tab.Screen name={"History"} component={History}/>
                <Tab.Screen name={"Settings"} component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App