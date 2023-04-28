import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {

  return (
    <>
        <div>
          <Link href={"/pokeRegion"}>
              <h1>Search Pokemon by Regions</h1>
          </Link>
        </div>
        
        <div>
            <Link href={"/pokeType"}>
                <h1>Search Pokemon by Types</h1>
            </Link>
        </div>

        <div>
          <Link href={"/all"}>
              <h1>Search all Pokemon here!!!</h1>
          </Link>
        </div>
    </>
  )
}
