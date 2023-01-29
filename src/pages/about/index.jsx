import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export function Sobre(){
    const route = useRoute()
    const navigate = useNavigation()
    useLayoutEffect(()=>{
     navigate.setOptions({
        title: route.params?.nome === '' ? 'Página sobre' : route.params?.nome
     })
    },[navigate])
    return(
        <View style={styles.container}>
          <Text>Olá, sou Carlos Eduardo</Text>
          <Text>{route.params?.email}</Text>
          <Text>{route.params?.nome}</Text>
          <Text>{route.params?.teste}</Text>
          <Button title="Contato" onPress={()=>navigate.navigate('Contato')}/>
          <Button title="Voltar tela" onPress={()=>navigate.goBack()}/>
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
