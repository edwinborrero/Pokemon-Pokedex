import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';
import { useRouter } from 'next/router';

const Pokemon = ({ pokemon }) => {

    return (
        <>
            <h1>Pokemon Information</h1>
            {pokemon.map((pokemons) => {
                return (
                    <div key={pokemons._id}>
                        <h1>Region: {pokemons.region}</h1>
                        <h2>Name: {pokemons.name}</h2>
                        <h2>Dex Number: {pokemons.dexNumber}</h2>
                        <h2>Type: {pokemons.type}</h2>
                    </div>
                )
            })}
        </>
    );
};

export default Pokemon;

export async function getServerSideProps(context) {
    //dbConnect();

    const { pokemon } = context.params;
  
    const result = await PokeModel.find({ name: pokemon });
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
}