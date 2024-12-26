import { Text,View } from "react-native";
import Loginscreen from '../Componet/Loginscreen';
import { Redirect } from "expo-router";

export default function Index(){
  

  return(
    <View
     style={{flex:1}}
    >
      
      <Loginscreen/> 
    </View>
  )
}