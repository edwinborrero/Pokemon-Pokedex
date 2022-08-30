import Link from "next/link";
import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';
import { useRouter } from "next/router";

const Type = ({ pokemon }) => {
    const router = useRouter();
    const xtype = router.query.type;

    return (
        <>
            <html>
                <body>
                <h1>List of <a className="p-router">{xtype} Type</a> Pokemon</h1>
                <div className="wrapper-pokemon">
                    {pokemon.map((pokemons) => {
                        return (
                            <div key={pokemons._id}>
                                
                                <Link href="/pokeType/[type]/[pokemon]" as={`/pokeType/${xtype}/${pokemons.name}`}>
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