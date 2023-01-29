import { createDrawerNavigator } from '@react-navigation/drawer'
import { About } from '../src/pages/forTab/about'
import { Home } from '../src/pages/forTab/home'
import { StackComponent } from './stack'
import { Custom } from '../src/components/customDrawer'

const Drawer = createDrawerNavigator()

export function DrawerComponent(){
    return(
       <Drawer.Navigator
         drawerContent={Custom}
         screenOptions={{
            headerShown: false,

            drawerStyle:{
               backgroundColor: '#FFF'
            },
            drawerActiveBackgroundColor: '#222',
            drawerActiveTintColor: '#FFF',
            drawerInactiveBackgroundColor: '#FFFA',
            drawerInactiveTintColor: '#000'
         }}
       >
           <Drawer.Screen
              name="HomeStack"
              component={StackComponent}
              options={{
                title: 'Inicio'
              }}
           />
           <Drawer.Screen
              name='about'
              component={About}
              options={{
                 headerShown: true
              }}
           />
       </Drawer.Navigator>
    )
}