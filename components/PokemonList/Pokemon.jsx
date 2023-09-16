import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Pokemon({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <Link style={styles.link} href={`details/${data.name}`}>See Details</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5
  },
  text: {
    fontSize: 32,
    textTransform: "uppercase"
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