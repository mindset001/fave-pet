import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import faveSlice from "../features/faveSlice";
import { change } from "../features/faveSlice";


export default function Fvae() {
    const [data, setData] = useState([]);

    // const url = "https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=beng&api_key=live_dA76LKqI9tRwRXuprp32hPArhkDQzKSQ68KCwMq7WBL7hqYoCzrDPkloYgHqshKY"
   

    // const getData = () => {
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((json)=> setData(json))
    //     .catch((err) => console.log(err))
      
    // }
    const bear = useSelector((state)=> state.faveSlice.fave)
    // setData(bear)

    useEffect(()=> {
        // getData()
        console.log(bear);
        // console.log(bear);
    },[])
 
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.cats}>Cats I Like</Text>
            </View>
        <FlatList
                data ={bear}
                numColumns={2}
                
                renderItem ={ ({item}) => (
                    
                    <TouchableOpacity style={styles.cover}>
                        <Image source={{uri: item.url}} style={styles.img}/>
                        <View style={styles.right}>
                        <Text>{item.breeds[0].name}</Text>
                        <Image source={require('../assets/clicked.png')}/>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20.
    },
    cats:{
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 16
    },
    img:{
        width: 150,
        height: 150,
        borderRadius: 10
    },
    right:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 110,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cover:{
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 15,
        
    }
})
