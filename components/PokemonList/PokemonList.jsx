import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Pokemon from './Pokemon'

function PokemonList({list}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {list.map(pokemon => (
            <Pokemon key={pokemon.name} data={pokemon} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  scrollView:{
    width: "100%",
    margin: "auto"
  }
});

export default PokemonList