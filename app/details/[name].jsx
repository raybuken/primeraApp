import React from 'react'
import { useEffect, useState } from "react";
import { useLocalSearchParams } from 'expo-router'
import { Image, StyleSheet, Text, View,ScrollView } from 'react-native'

function Details() {
  const {name} = useLocalSearchParams();
  const [data, setData] = useState({});

  const getPokemondetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        const pokemonList = data  
        setData(pokemonList);
        console.log(data.sprites)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    getPokemondetails();
  }, []);
  return (
    <ScrollView style={styles.scrollView}>
    <View>
      <Text style={styles.text_title}>{data?.name}</Text>
      <Image style={styles.image} source={{uri: data?.sprites?.other?.home?.front_default}} alt={data?.name}/>
      <Image style={styles.image} source={{uri: data?.sprites?.other?.["official-artwork"]?.front_default}} alt={data?.name}/>

      <Text style={styles.text}>{data?.types?.map(x => x.type.name)}</Text>
    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5
  },
  text: {
    fontSize: 26,
    textAlign: "center",
    textTransform: "capitalize"
  },
  text_title: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#35A29F",
    width: "100%",
    textAlign: "center",
    color: "#fff"
  },
  image: {
    width: 400,
    height: 400
  },
  link:{
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: "#4F709C",
    borderStyle: "solid",
    alignSelf: "center",
    padding: 10,
    color: "white",
    fontWeight: "bold"
  },
  scrollView:{
    width: "100%",
    margin: "auto"
  }
})

export default Details