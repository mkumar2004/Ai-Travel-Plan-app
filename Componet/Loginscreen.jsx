import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Loginscreen = () => {
  const route = useRouter();
  return (
    <View>
      <Image
        style={{ width: '100%', height: 500 }}
        source={require("../assets/images/login.jpeg")}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontFamily: 'Inspiration', textAlign: 'center', }}> AI Travel Planner</Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#888888',marginTop:'10' }}>Effortless Travel planning. Discover Your perfert Vacation. AI-Guided Travel.Seamless Experiences. Your World, Your Way</Text>
        
        <TouchableOpacity 
           onPress={()=>route.push('auth/sign-in/Signin')}
          
         >
      
         
        <View style={styles.container2}>

          <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'Poppins'}}> Get Started</Text>
    
        </View>
        </TouchableOpacity>

      </View>



    </View>




  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -19,
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '500'
  },
  container2:{
      backgroundColor:Colors.PRIMARY,
      marginTop:'10%',
      borderRadius:99,
      padding:12,
      width:'80%', 
      marginLeft:'30',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:'5'

  }
})