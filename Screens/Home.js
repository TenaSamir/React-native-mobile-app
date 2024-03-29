import React from 'react'
import { TouchableHighlight, View,TouchableOpacity,TouchableHighlightBase ,StyleSheet,Text,Image} from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselData from './CarouselData'; 
import LogIn from './LogInScreen';
import CarouselCard from './CarusleCard';
import { Button } from 'react-native-paper';

const Home = ({navigation}) => {
 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <CarouselCard/>
      
       <Image style={{height: 150,width:100,marginBottom:40}} source={require('../../my-app/1339.png')}/>
         {/* <Button style={{ marginBottom:20,
            borderRadius: 5,
            paddingHorizontal:37,
            paddingVertical:12,
            backgroundColor:'#FF8551'}} onPress={()=>{alert('Hello Claudia from React Native app')}}><Text style={{color:'#FFDEDE'}}>For best Discount Click here</Text>
            

            </Button>
             */}
      
            
    </View>
  )
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
          backgroundColor:'#FAF0E4',
          marginBottom:5
      },
});
export default Home