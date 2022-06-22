import { View, Text, Image, FlatList } from 'react-native'
import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({navigation}) => {

  const Item = ({ title, overview, poster_path, popularity, }) => {

    let image = poster_path
  
    return(
    
    <View style={{flex:1, borderWidth:3,borderColor:'white', margin:15}}>
  
      <Text style={{fontWeight:'bold',color:'white',fontSize:30,textAlign:'center',marginHorizontal:10}}>{title}</Text>
  
      <View style={{alignItems:'center'}}>
        <Image source={{uri:`https://image.tmdb.org/t/p/original${image}`}} style={{height:200, width:150}}/>
      </View>
  
      <Text style={{color:'white',fontSize:18, textAlign:'justify',marginHorizontal:15}}>{overview}</Text>
  
      <View style={{alignItems:'center',marginBottom:10}}>
        <TouchableOpacity
         style={{
          borderWidth:3, 
          borderColor:'white',
          width:'120%',
          borderRadius:5,
          alignItems:'center'
          }}
          onPress={() => 
            navigation.navigate('Detail',{
              title:title,
              overview:overview,
              image:image,
              popularity:popularity
              })}
          >
          <Text style={{color:'white',fontSize:18}}>+ d'infos</Text>
        </TouchableOpacity>
      </View>
  
    </View>
    )
  };

    const [showPopularMovies, setShowPopularMovies] = useState([])

    const apiKey = "42fb6d4362a7a2328e024d419c7de910"
    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)

    .then( response => {

      if(response.status ===200) {

        setShowPopularMovies(response.data.results)
        console.log(response.data.results[0]);      
      }    
    }   
    )
    .catch(error => {
      console.log('erreur');
    }
    )
  },[]
  )

  const renderItem = ({ item }) => (
    <Item title={item.title} overview={item.overview} poster_path = {item.poster_path} popularity={item.popularity}/>
  );

  return (
    <ScrollView style={{flex:1, backgroundColor:'black'}}>

      <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:35}}>Movie Database</Text>

      <FlatList
        data={showPopularMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </ScrollView>
  )
}

export default HomeScreen