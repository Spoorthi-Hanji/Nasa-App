import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import { Stack } from './App';
import {useState,useEffect} from 'react'
import axios from 'axios';


export type details = {
    name: string,
    nasa_jpl_url : string,
    is_potentially_hazardous_asteroid: boolean
}

const Asteroid: React.FunctionComponent<Stack>=(props)=> {

    const{route} = props;    
    const {asteroidId} = route.params;
    const [loading,setLoading]=useState(true)
    const [asteroidData, setAsteroidData] = useState<details>([])
    const [ error, setError] = useState(false)
    
    const fetchAsteroidData = async  ()=>{
        const result = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=HHhf3Ku6nzCyXlztYuIHQfmxErJDSXfDQGXj5OlY`)
          setAsteroidData(result.data)
          setLoading(false)
        }
    
        useEffect(()=>{
            fetchAsteroidData()
        },[])
    
    return (
      <View style={styles.container} >
        {
            loading ? <ActivityIndicator size="small" color="#0000ff" /> : (
                <View >
                    <Text style={styles.content}>Name: {asteroidData.name}</Text>
                    <Text style={styles.content}>nasa_jpl_url: {asteroidData. nasa_jpl_url}</Text>
                    <Text style={styles.content}>is_potentially_hazardous_asteroid: {asteroidData.is_potentially_hazardous_asteroid}</Text>

                </View>
            )
        }
         
      </View>
      
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 30,
      marginTop: 100,
      borderRadius: 30,
      backgroundColor: "#D3D3D3",
      width: 300, //card width
      marginLeft:50, //centers the card
    },
    content:{
        fontWeight: '900'
    }
    
  });
  export default Asteroid;
  //2001036, name: Ganymed
  //2001221, name: 1221 Amor
  //2001580, name: 1580 Betulia