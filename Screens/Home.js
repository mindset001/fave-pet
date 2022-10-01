import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Fave from "../components/FaveIcon";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../features/faveSlice";
import faveSlice from "../features/faveSlice";

export default function Home() {
    const [liked, setLiked] = useState();
    const dispatch = useDispatch()

    const [data, setData] = useState([]);

    // const handleClick = (event, key) => {
    //     console.log(event.target);
    //     console.log('key index: ', key);
    //   };
  
        const onClick = (event, key) =>  {
            setLiked(!liked)
            // console.log(event.target);
            console.log('key index: ', key);
          };
   

 

    const url = "https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&api_key=live_dA76LKqI9tRwRXuprp32hPArhkDQzKSQ68KCwMq7WBL7hqYoCzrDPkloYgHqshKY"
   

    const getData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((json)=> setData(json))
        .catch((err) => console.log(err))
      
    }
      

    useEffect(()=> {
        getData()
        console.log(liked);
        console.log(data);
    },[])
    return(

        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.cats}>
                <Text>All Cats</Text>
            </View>

            <View  >
               
               <ScrollView>
               {data.map((item, index) => 
                        <View style={styles.cover}  key={index}>
                           <View>
                           <View style={styles.right}>
                            
                            <Image source={{uri: item.url}} style={styles.img}/>

                            {/* <Text>{item.id} </Text> */}
                            <Text>
                                <View>
                                    <Text>{item.breeds[0].name}</Text>
                                </View>
                            </Text>

                        </View>
                           </View>
                        <TouchableOpacity style={{marginRight: 20}} 
                        // onPress={event => onClick(event, item.id)} key={index}
                        onPress={() => onClick(index, item.id)} 
                         >
                        
                            {!liked && <Image source={require('../assets/unclick.png')}/>}
                            {liked && <Image source={require('../assets/clicked.png')}/>}
                            </TouchableOpacity>

                            
                        </View>
                    )}
               </ScrollView>

                
          

                
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20.
    },
    cats:{
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 16
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: 10
    },
    right:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 110,
        justifyContent: 'space-between'
    },
    cover:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        
    }
})

