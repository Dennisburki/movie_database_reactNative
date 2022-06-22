import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { addFav } from '../favSlice';

const DetailScreen = (props) => {

    const [fav,setfav] = useState({})
    const dispatch = useDispatch()

    function handleSubmit() {
        dispatch(addFav(props.route.params))
    }

    console.log(props);
  return (
    <ScrollView style={{flex:1,backgroundColor:'black'}}>
    <View style={{flex:1, borderWidth:3,borderColor:'white', margin:15}}>
  
      <Text style={{fontWeight:'bold',color:'white',fontSize:30,textAlign:'center',marginHorizontal:10}}>{props.route.params.title}</Text>

      <Text style={{color:'white',textAlign:'center', fontSize:12}}>Popularity: {props.route.params.popularity}</Text>
  
      <View style={{alignItems:'center'}}>
        <Image source={{uri:`https://image.tmdb.org/t/p/original${props.route.params.image}`}} style={{height:200, width:150}}/>
      </View>
  
      <Text style={{color:'white',fontSize:18, textAlign:'justify',marginHorizontal:15}}>{props.route.params.overview}</Text>
  
    </View>
    <TouchableOpacity
    onPress={handleSubmit}
    >
        <Text style = {{color:'white'}}>Ajouter aux favoris</Text>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default DetailScreen