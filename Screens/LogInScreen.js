// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


// export default class ProductList extends React.Component {
// constructor(props){
//   super(props);
//   this.state = {apiInfo: 'default'};
// }
//     componentDidMount() {
//       const that = this;
//       fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
//           .then(function(response) {
//               return response.json();
//           })
//           .then(function(jsonData) {
//               return JSON.stringify(jsonData);
//           })
//           .then(function(jsonStr) {
//               that.setState({ apiInfo: jsonStr });
//               console.log(jsonStr);
//           });
//   }
 
//     componentWillUnmount() {
//         // make fetch request
  
      
//     }
   
//     render() {
//       return (
//         <View>
//         <Button title='button' onClick={this.fetchUsers}/>
       
//             <Text>
//               {this.state.apiInfo}
//             </Text>
//             </View>
//       )

//   }
// }
const LogIn=({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style={{borderRadius:70,marginBottom:50,height: 150,width: 150 }} source={require('../Components/242.jpg')}/>
       <TextInput style={styles.input}  placeholder="Enter your Email"  keyboardType="email-address"/>
       <TextInput style={styles.input}  placeholder="Enter your Password"  secureTextEntry={true} />
      
      {/* Log In Button */}

      <TouchableOpacity style={styles.LogInButton} onPress={()=>{navigation.navigate('Home')}} >
      <Text>Log In</Text>
      </TouchableOpacity>
      
       {/* Sign Up Button */}
       
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
          <Text style={styles.link}>Sign up</Text>
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
      flexDirection: 'row',
      marginTop: 4,
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
           
        },LogInButton:{
       
           
           
            borderRadius: 5,
            paddingHorizontal:37,
            paddingVertical:12,
            backgroundColor:'#99ccff',
            marginBottom:5
        },
  });

  
export default LogIn;