import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import PokemonList from "../components/PokemonList/PokemonList";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => {
        const pokemonList = data.results

        pokemonList.map(pokemon => {
          return getPokemon(pokemon)
        })
        setList(pokemonList)
        setCount(data.count)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const getPokemon = (pokemon) =>{
    const id = pokemon.url.split("/")[6]
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    pokemon.sprite = sprite
    return pokemon
  }

  const loadMorePokemon = () => {
    setLoadingButton(true)
    const currentCount = list.length

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentCount}&limit=20`)
    .then(res => res.json())
    .then(data => {
      const pokemonList = data.results

      pokemonList.map(pokemon => {
        return getPokemon(pokemon)
      })

      const newPokemonList = [...list].concat(pokemonList)
      setList(newPokemonList)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setLoadingButton(false))
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading />: (
      <>
        <Text style={styles.title}>Pokedex</Text>
          <PokemonList list={list} update={loadMorePokemon} count={count} loadingButton={loadingButton}/>
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
