import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'
import {Button, TextInput, ImageBackground} from 'react-native'
import { Stack } from './App';
import asteroid1 from './image/asteroid1.jpg'

const Home: React.FunctionComponent<Stack>=(props)=>  {
    const{navigation} = props;
    const [asteroidId, setAsteroidId] = useState('')

  return (
    <View >
        <ImageBackground source = {asteroid1} style={styles.img}>
        <TextInput
          placeholder="Enter asteroid ID" 
          placeholderTextColor="white"
          onChangeText={
            (value)=>setAsteroidId(value)
          }
          keyboardType='numeric'
          style={styles.textInputStyle}
        />
		 
        <View style={styles.button}>
          <Button 
            color="#606070" 
            title="Submit" onPress={()=>navigation.navigate('Asteroid', {asteroidId}) }
            disabled={!asteroidId}
          />
		  
        </View>
        <View style={styles.button}>
          <Button 
            color="#606070" 
            title="Random" onPress={()=>navigation.navigate('Random')}
          />
		  
        </View>

        </ImageBackground>
       
       

    </View>
    
  )
}
const styles = StyleSheet.create({
    
    textInputStyle: {
      width: '50%',
      height: 40,
      marginLeft:100,
      borderWidth: 2,
      marginTop: 200,
      borderRadius: 20,
      alignItems: 'center',
      color: 'white',
      borderColor: 'white'
      
    },
    button:{
        alignItems: 'center',
        marginTop: 15,        
     },
     img:{
        height: 750
      }

  });
export default Home;