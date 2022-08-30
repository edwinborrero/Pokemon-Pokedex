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
            return (
                <div key={pokemons._id}>
                  
                  <Link href={"/all/[pokemon]"} as={`/all/${pokemons.name}`}>
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
  )
}

export async function getServerSideProps() {
  dbConnect();

  /* find all the data in our database */
  const result = await PokeModel.find({}, 'name dexNumber');
  const pokemons = result.map((doc) => {
    const pokemon = doc.toObject()
    pokemon._id = pokemon._id.toString()
    return pokemon
  })

  return { props: { pokemon: pokemons } }
}
