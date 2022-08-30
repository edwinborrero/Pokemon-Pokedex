import Link from "next/link";
import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';
import { useRouter } from "next/router";

const Region = ({ pokemon }) => {
    const router = useRouter();
    const xregion = router.query.region;

    return (
        <>
            <html>
                <body>
                    <h1>List of Pokemon in the <a className="p-router">{xregion}</a> region</h1>
                    <div className="wrapper-pokemon">
                        {pokemon.map((pokemons) => {
                            return (
                                <div key={pokemons._id}>
                                    
                                    <Link href="/pokeRegion/[region]/[pokemon]" as={`/pokeRegion/${xregion}/${pokemons.name}`}>
                                        <div className='button-pokemon bar_color'>
                                            <a className='a-pokemon-dnumber'>{pokemons.dexNumber}</a> <a className='a-pokemon-name'>{pokemons.name}</a>
                                        </div>
                                    </Link>
                                    
                                </div>
                            )
                        })}
                    </div>
                </body>
            </html>
        </>
    );
};

export default Region;

export async function getServerSideProps(context) {
    //dbConnect();

    const { region } = context.params;
  
    const result = await PokeModel.find({ region: new RegExp(`^${region}$`, "i") }, 'name dexNumber');
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
}