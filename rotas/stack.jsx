import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../src/pages/forTab/home'
import { Detalhes } from '../src/pages/detalhes'

const Stack = createStackNavigator()

export function StackComponent(){
   return(
         <Stack.Navigator>
           <Stack.Screen 
              name='Home' 
              component={Home}
              options={{
                 title: 'Tela inicial',
                 headerStyle:{
                   backgroundColor: '#121212',
                 },
                 headerTintColor: '#FFF'
              }}
           />

           <Stack.Screen 
              name='Details' 
              component={Detalhes}
              options={{
                 title: 'Detalhes'
              }}
           />
        </Stack.Navigator>
   )
}