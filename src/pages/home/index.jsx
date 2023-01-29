import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Home(){
    const navigation = useNavigation()
    function navegaSobre(){
        navigation.navigate('Sobre', {nome: 'Carlos', email: 'teste@gmail.com', teste: 'olá'})
    }
    return(
        <View style={styles.container}>
          <Text>Home</Text>
          <Button title="sobre" onPress={navegaSobre}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
