// In App.js in a new project

import * as React from 'react';
import { View, Text, Image,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Register=({navigation})=>{ 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
       <Image style={{borderRadius:70,marginBottom:70,height: 100,width: 100 }} source={require('../Components/242.jpg')}/>
       
       <View style={styles.row}>
       <TextInput style={styles.inputName}  placeholder="First Name"   />
       <TextInput style={styles.inputName}  placeholder="Last Name"   />
       </View>

       <TextInput style={styles.input}  placeholder="Mobile Number"  keyboardType='number-pad' />

       <TextInput style={styles.input}  placeholder="Your New Password"  secureTextEntry={true} />
       <TextInput style={styles.input}  placeholder="Confirm your Password"  secureTextEntry={true} />
      {/* Log In Button */}

      <TouchableOpacity style={styles.rigesterButton} onPress={()=>{navigation.navigate('LogIn')}} >
      <Text>Register</Text>
      </TouchableOpacity>
      
       {/* Sign Up Button */}
       
      <View style={styles.row}>
        <Text>Have account already ? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('LogIn')}}>
          <Text style={styles.link}>Log In</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
} 
const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      display: 'flex',
      justifyContent:'space-between',
      flexDirection: 'row',
      marginLeft:'4%'
    },
    forgot: {
      fontSize: 13,
      
    },
    link: {
      
      fontWeight: 'bold',
      
    },
    
   
        input: {
            borderColor: "gray",
            width: "80%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 15,
            marginBottom:'5%'
        },
        inputName:{
         
          borderColor: "gray",
            width: "38%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            marginRight:'5%',
            marginBottom:'5%',
            
        },
        rigesterButton:{
            marginBottom:8,
            borderRadius: 5,
            paddingHorizontal:37,
            paddingVertical:12,
            backgroundColor:'#99ccff'

        },
  });

  
  export default Register;
