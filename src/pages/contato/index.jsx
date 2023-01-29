import { Text, View, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

export function Contato(){
    const navigate = useNavigation()
    function backHome(){
        navigate.dispatch(StackActions.popToTop())
    }
     return(
        <View>
            <Text>Página contato</Text>
            <Button title="Voltar Home" onPress={backHome}/>
        </View>
     )
}