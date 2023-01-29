import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StackComponent } from './rotas/stack'
import TabNavigate from './rotas/tab'
import { DrawerComponent } from './rotas/drawer'


export default function App(){
   return(
     <NavigationContainer>
       <DrawerComponent/>
     </NavigationContainer>
   )
}