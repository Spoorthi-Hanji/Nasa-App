import React from 'react'
import { Text, View,ScrollView, StyleSheet} from 'react-native'
import { Stack } from './App';
import {useState,useEffect} from 'react'
import axios from 'axios';


export type details = {
  name: string,
  id: number
}

const Random: React.FunctionComponent<Stack>=()=> {
    const [randomId, setRandomId] = useState<details>([]);
    const [randomData, setRandomData] = useState<details>([]);
    const [id,setId] = useState<any>([]);
    const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"
    const [error , setError] = useState(false)

    const countryApi = axios.create({
      baseURL : "https://api.nasa.gov/"
    })

    const getRandomId = ()=>{
      countryApi.get(`neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
      .then((response:any)=> setRandomId(id.concat(response.data.near_earth_objects)))
      .catch((error:any)=>setError(true))
    }

    useEffect(()=>getRandomId(),[])
    
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            randomId.map(item =>(
              <View style={styles.item}>
                <Text style={styles.heading}>Name: {item.name}</Text>
                <Text style={styles.content}>nasa_jpl_url: {item.nasa_jpl_url}</Text>
                <Text style={styles.content}>is_potentially_hazardous_asteroid: {item.is_potentially_hazardous_asteroid}</Text>
              </View>
            ))
          }
        </ScrollView>
         
         
  
      </View>
      
    )
  };

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20
    },
    item:{
      marginTop:24,
      padding: 30,
      backgroundColor: '#D3D3D3',
      fontSize: 15
    },
    heading:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    content:{
      fontWeight: 'bold'
    }

  })
  export default Random;