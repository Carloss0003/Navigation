import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { StackComponent } from './stack'

import { Home } from '../src/pages/forTab/home'
import { Contato } from '../src/pages/forTab/contato'
import { About } from '../src/pages/forTab/about'

const Tab = createBottomTabNavigator()

export default function TabNavigate(){
    return(
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor:'#FFF',
                tabBarHideOnKeyboard: true,
                tabBarStyle:{
                    backgroundColor: '#000',
                    borderTopWidth: 0
                }
              }}
            >
                <Tab.Screen 
                   name='HomeStack'
                   component={StackComponent}
                   options={{
                     tabBarIcon: ({color, size}) => {
                        return <FontAwesome5 name="home" size={size} color={color} />
                    },
                    headerShown: false
                }}
                />
                <Tab.Screen 
                   name='Sobre'
                   component={About}
                   options={{
                       tabBarIcon: ({color, size}) =>{
                           return <FontAwesome5 name="address-book" size={size} color={color} />
                      },
                   }}
                />
                <Tab.Screen 
                   name='Contato'
                   component={Contato}
                   options={{
                    tabBarIcon: ({color, size}) =>{
                        return <FontAwesome5 name="phone" size={size} color={color} />
                   }
                }}
                />
            </Tab.Navigator>
    )
}