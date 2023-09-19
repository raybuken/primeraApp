import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import PokemonList from "../components/PokemonList/PokemonList";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(res => res.json())
      .then(data => {
        const pokemonList = data.results

        pokemonList.map(pokemon => {
          const id = pokemon.url.split("/")[6]
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          pokemon.sprite = sprite
          return pokemon
        })
        setData(pokemonList)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading />: (
      <>
        <Text style={styles.title}>Pokedex</Text>
        <PokemonList list={data}/>
        <StatusBar/>
      </>
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#35A29F",
    width: "100%",
    textAlign: "center",
    color: "#fff"
  }
});
