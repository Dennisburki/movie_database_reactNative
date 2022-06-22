import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = (props) => {

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
    </ScrollView>
  )
}

export default DetailScreen