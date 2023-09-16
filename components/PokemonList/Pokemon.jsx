import { Button, Divider } from '@react-native-material/core'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Pokemon({data}) {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: "row", gap: 10}}>
          <Image style={styles.image} source={{uri: data.sprite}} alt={data.name}/>
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <Link href={`details/${data.name}`} asChild>
          <Button title="Ver" color='primary' />
        </Link>
      </View>
      <Divider/>
    </>
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
    textTransform: "capitalize"
  },
  image: {
    width: 32,
    height: 32
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
  }
})

export default Pokemon