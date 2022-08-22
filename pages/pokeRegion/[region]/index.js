import Link from "next/link";
import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';

const Region = ({ pokemon }) => {

    return (
        <>
            <h1>List of Pokemon</h1>
            {pokemon.map((pokemons) => {
                return (
                    <div key={pokemons._id}>
                        <h2>
                            <Link href="/pokeRegion/[region]/[pokemon]" as={`/pokeRegion/${pokemons.region}/${pokemons.name}`}>
                                <a>{pokemons.name}   {pokemons.dexNumber}</a>
                            </Link>
                        </h2>
                    </div>
                )
            })}
        </>
    );
};

export default Region;

export async function getServerSideProps(context) {
    //dbConnect();

    const { region } = context.params;
  
    const result = await PokeModel.find({ region: region}, 'name dexNumber');
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
}