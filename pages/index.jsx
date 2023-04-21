import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dbConnect from '../database/database';
import PokeModel from '../models/pokemon-model';
import Header from '../components/header';
import Link from 'next/link';

export default function Home({ pokemon }) {

  return (
    <>
      <Header />
      <html>
      <body>
        <h1>List of all the Pokemon</h1>
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
                  
                  <Link href={"/all/[pokemon]"} as={`/all/${pokemons.name.toLowerCase()}`}>
                      <div className='button-pokemon bar_color'>
                        <a className='a-pokemon-dnumber'>{pokemons.dexNumber}</a> <a className='a-pokemon-name'>{pokemons.name}</a>
                        <img src={`/images/sprites2d/${lower}.png`}/>
                      </div>
                  </Link>
                  
                </div>
            )
          })}
        </div>
      </body>
      </html>
    </>
  )
}

export async function getServerSideProps() {
  dbConnect();
 
  /* find all the data in our database */
  const result = await PokeModel.find({}, 'name dexNumber').sort({ dexNumber: 1 });
  const pokemons = result.map((doc) => {
    const pokemon = doc.toObject()
    pokemon._id = pokemon._id.toString()
    return pokemon
  })

  return { props: { pokemon: pokemons } }
}
