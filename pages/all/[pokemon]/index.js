import PokeModel from '../../../models/pokemon-model';
import FormModel from '../../../models/otherForms-model';
import dbConnect from '../../../database/database';

export default function AllPokemon({ pokemon }) {

    return (
      <>
        <h1>Pokemon Information:</h1>
        {pokemon.map((pokemons) => {
          if (pokemons.form != null) {
            
            // for (let i=0; i < pokemons.abilities.length; i++) {

            // return (
            //   <div key={pokemons._id}>
            //     <h2>Name: {pokemons.name}</h2>
            //     <h2>Dex Number: {pokemons.dexNumber}</h2>
            //     <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
            //     <h2>Species: {pokemons.species}</h2>
            //     <h2>Height: {pokemons.height}</h2>
            //     <h2>Weight: {pokemons.weight}</h2>
            //     <h2>Abilities: </h2>
            //             <ul>
            //             <li>{pokemons.abilities[i]}</li>
            //             </ul>
            //     <h2>Region: {pokemons.region}</h2>
            //     <h2>Form: {pokemons.form}</h2>
            //   </div>
            // )

            // }
          
            if (pokemons.abilities.length == 1) {
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
                          </ul>
                  <h2>Region: {pokemons.region}</h2>
                  <h2>Form: {pokemons.form}</h2>
                </div>
              )
            } else if (pokemons.abilities.length == 2) {
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
                          </ul>
                  <h2>Region: {pokemons.region}</h2>
                  <h2>Form: {pokemons.form}</h2>
                  <h2>Other Forms: {pokemons.otherForms[0].form}</h2>
                </div>
              )
            } else {
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
                  <h2>Region: {pokemons.region}</h2>
                  <h2>Form: {pokemons.form}</h2>
                </div>
              )
            }

          } else {

            // return (
            //   <div key={pokemons._id}>
            //     <h2>Name: {pokemons.name}</h2>
            //     <h2>Dex Number: {pokemons.dexNumber}</h2>
            //     <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
            //     <h2>Species: {pokemons.species}</h2>
            //     <h2>Height: {pokemons.height}</h2>
            //     <h2>Weight: {pokemons.weight}</h2>
            //     <h2>Abilities: </h2>
            //             <ul>
            //                   <li>{pokemons.abilities[0]}</li>
            //             </ul>
            //     <h2>Region: {pokemons.region}</h2>
            //   </div>
            // )

            if (pokemons.abilities.length == 1) {
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
                          </ul>
                  <h2>Region: {pokemons.region}</h2>
                </div>
              )
            } else if (pokemons.abilities.length == 2) {
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
                          </ul>
                  <h2>Region: {pokemons.region}</h2>
                </div>
              )
            } else {
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
                  <h2>Region: {pokemons.region}</h2>
                </div>
              )
            }
          }
        })}
      </>
    )
  }
  
  export async function getServerSideProps(context) {
    // dbConnect();

    const { pokemon } = context.params;
  
    /* find a specific data in our database */
    const result = await PokeModel.find({ name: pokemon}).populate({path: 'otherForms', select: '-_id -refPokemon', model: FormModel});
    const pokemons = result.map((doc) => {
      const pokemon = doc.toObject()
      pokemon._id = pokemon._id.toString()
      return pokemon
    })
  
    return { props: { pokemon: pokemons } }
  }