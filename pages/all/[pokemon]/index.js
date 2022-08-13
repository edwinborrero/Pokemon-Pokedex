import PokeModel from '../../../models/pokemon-model';
//import dbConnect from '../../../database/database';

export default function AllPokemon({ pokemon }) {

    return (
      <>
        <h1>Pokemon Information:</h1>
        {pokemon.map((pokemons) => {
          return (
            <div key={pokemons._id}>
              <h2>Name: {pokemons.name}</h2>
              <h2>Dex Number: {pokemons.dexNumber}</h2>
              <h2>Type: {pokemons.type}</h2>
              <h2>Region: {pokemons.region}</h2>
            </div>
          )
        })}
      </>
    )
  }
  
  export async function getServerSideProps(context) {
    // dbConnect();

    const { pokemon } = context.params;
  
    /* find a specific data in our database */
    const result = await PokeModel.find({ name: pokemon});
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
  }