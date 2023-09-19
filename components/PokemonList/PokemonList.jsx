import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Pokemon from './Pokemon'
import ShowMore from './ShowMore';

function PokemonList({list, update, count, loadingButton}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {list.map(pokemon => (
            <Pokemon key={pokemon.name} data={pokemon} />
          ))
        }
        {list.length < count && <ShowMore updateData={update} loading={loadingButton} /> }
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