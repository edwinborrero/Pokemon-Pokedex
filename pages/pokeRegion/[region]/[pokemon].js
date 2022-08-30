import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';
import { useRouter } from "next/router";

const Pokemon = ({ pokemon }) => {
    const router = useRouter();
    const xregion = router.query.region;

    return (
        <>
            <h1>Pokemon Information</h1>
            <h1>Region: <a className='p-router'>{xregion}</a></h1>
            {pokemon.map((pokemons) => {
                return (
                    <div key={pokemons._id}>
                        <h2>Name: {pokemons.name}</h2>
                        <h2>Dex Number: {pokemons.dexNumber}</h2>
                        <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
                        <h2>Species: {pokemons.species}</h2>
                        <h2>Height: {pokemons.height}</h2>
                        <h2>Weight: {pokemons.weight}</h2>
                        <h2>Abilities: </h2>
                                <ul>
                                    <li>{pokemons.abilities[0]}</li>
                                    <li>{pokemons.abilities[1]}</li>
                                    <li>{pokemons.abilities[2]}</li>
                                </ul>
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