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
      <h1>List of all the Pokemon</h1>
      {pokemon.map((pokemons) => {
        return (
          <div key={pokemons._id}>
            <h2>
              <Link href={"/all/[pokemon]"} as={`/all/${pokemons.name}`}>
                <a>{pokemons.name}  {pokemons.dexNumber}</a>
              </Link>
            </h2>
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps() {
  dbConnect();

  /* find all the data in our database */
  const result = await PokeModel.find({});
  const pokemons = result.map((doc) => {
    const pokemon = doc.toObject()
    pokemon._id = pokemon._id.toString()
    return pokemon
  })

  return { props: { pokemon: pokemons } }
}
