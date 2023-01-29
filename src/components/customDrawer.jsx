import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export function Custom(props){
    return(
        <DrawerContentScrollView {...props}>
           <View style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30
           }}>
                <Image
                  source={require('../../assets/perfil.png')}
                  style={{width: 65, height: 65}}
                />
                <Text style={{color: '#000', fontSize: 17, marginTop: 5}}>
                    Bem-vindo
                </Text>
           </View> 
           <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

