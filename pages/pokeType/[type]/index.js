import Link from "next/link";
import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';

const Type = ({ pokemon }) => {

    return (
        <>
            <h1>List of Pokemon</h1>
            {pokemon.map((pokemons) => {
                return (
                    <div key={pokemons._id}>
                        <h2>
                            <Link href="/pokeType/[type]/[pokemon]" as={`/pokeType/${pokemons.type}/${pokemons.name}`}>
                                <a>{pokemons.name}   {pokemons.dexNumber}</a>
                            </Link>
                        </h2>
                    </div>
                )
            })}
        </>
    );
};

export default Type;

export async function getServerSideProps(context) {
    //dbConnect();

    const { type } = context.params;
  
    const result = await PokeModel.find({ type: new RegExp(`^${type}$`, "i")}, 'name dexNumber');
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
}