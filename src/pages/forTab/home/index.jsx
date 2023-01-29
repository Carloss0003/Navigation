import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native'

function Home(props) {
    const navigate = useNavigation()

    function forDetails(){
        navigate.navigate('Details')
    }
    return (
        <View>
            <Text>Tabs Home</Text>
            <Button title='ir para details' onPress={forDetails}/>
            <Button title='open drawer' onPress={()=>navigate.openDrawer()}/>
        </View>
    );
}

export {Home};