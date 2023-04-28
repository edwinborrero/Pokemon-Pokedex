import Link from "next/link";
import PokeModel from '../../../models/pokemon-model';
import dbConnect from '../../../database/database';
import { useRouter } from "next/router";

export default function PokemonRegionEntries({ pokemon }) {
    const router = useRouter();
    const xregion = router.query.region;

    return (
        <>
            <h1>List of Pokemon in the <a className="p-router">{xregion}</a> region</h1>
            <div className="wrapper-pokemon">
                {pokemon.map((pokemons) => {

                    /* In order to have all the sprites shown, 
                    first some case sensitive names must be changed to match the name of the image inside /public/images/sprites2d */
                    const firstRepl = pokemons.name.replace("♀", "-f");
                    const secRepl = firstRepl.replace("♂", "-m");
                    const thirdRepl = secRepl.replace("'", "");
                    const fourthRepl = thirdRepl.replace(".", "");
                    const fifthRepl = fourthRepl.replaceAll("é", "e"); 
                    const sixthRepl = fifthRepl.replace(":", "-");
                    const sevRepl = sixthRepl.replace(" ", "-");

                    const lower = sevRepl.toLowerCase();

                    return (
                        <div key={pokemons._id}>
                            
                            <Link href="/pokeRegion/[region]/[pokemon]" as={`/pokeRegion/${xregion}/${pokemons.name}`}>
                                <div className='button-pokemon bar_color'>
                                    <a className='a-pokemon-dnumber'>{pokemons.dexNumber}</a> <a className='a-pokemon-name'>{pokemons.name}</a>
                                    <img src={`/images/sprites2d/${lower}.png`}/>
                                </div>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    dbConnect();

    const { region } = context.params;
  
    const result = await PokeModel.find({ region: new RegExp(`^${region}$`, "i") }, 'name dexNumber').sort({ dexNumber: 1 });
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
}