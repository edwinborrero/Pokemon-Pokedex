import PokeModel from '../../../models/pokemon-model';
import FormModel from '../../../models/otherForms-model';
import dbConnect from '../../../database/database';

export default function AllPokemon({ pokeApi, pokeDB }) {

    return (
      <>
        <h1>Pokemon Information:</h1>
        {pokeDB.map((pokemons) => {

          return (
            <div>
              <h2>Name: {pokeApi.name}</h2>
              <h2>Dex Number: {pokeApi.id}</h2>
              <h2>Species: {pokemons.species}</h2>
              <h2>Height: {pokeApi.height}</h2>
              <h2>Weight: {pokeApi.weight}</h2>
            </div>
          )
    //     //   if (pokemons.form != null) {
            
    //     //     // for (let i=0; i < pokemons.abilities.length; i++) {
    //     //     //   const pokeAbilities = [];
    //     //     //   pokeAbilities.push(pokemons.abilities[i]);
    //     //     // }

    //     //     // let data = pokeAbilities;
    //     //     // let list = document.getElementById("abilities_list");
        
    //     //     // data.forEach((item) => {
    //     //     //     const li = document.createElement("li");
    //     //     //     li.innerText = item;
    //     //     //     list.appendChild(li);
    //     //     // });

    //     //     // return (
    //     //     //   <html>
    //     //     //     <body>
    //     //     //       <div key={pokemons._id}>
    //     //     //         <h2>Name: {pokemons.name}</h2>
    //     //     //         <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //     //         <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //     //         <h2>Species: {pokemons.species}</h2>
    //     //     //         <h2>Height: {pokemons.height}</h2>
    //     //     //         <h2>Weight: {pokemons.weight}</h2>
    //     //     //         <h2>Abilities: </h2>
    //     //     //             <ul id = "abilities_list"></ul>  
    //     //     //         <h2>Region: {pokemons.region}</h2>
    //     //     //         <h2>Form: {pokemons.form}</h2>
    //     //     //       </div>
    //     //     //     </body>
    //     //     //   </html>
    //     //     // )
            

    //     //     if (pokemons.abilities.length == 1) {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //           <h2>Form: {pokemons.form}</h2>
    //     //         </div>
    //     //       )
    //     //     } else if (pokemons.abilities.length == 2) {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                         <li>{pokemons.abilities[1]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //           <h2>Form: {pokemons.form}</h2>
    //     //           <h2>Other Forms: {pokemons.otherForms[0].form}</h2>
    //     //         </div>
    //     //       )
    //     //     } else {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                         <li>{pokemons.abilities[1]}</li>
    //     //                         <li>{pokemons.abilities[2]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //           <h2>Form: {pokemons.form}</h2>
    //     //         </div>
    //     //       )
    //     //     }

    //     //   } else {

    //     //     // for (let i=0; i < pokemons.abilities.length; i++) { 
    //     //     //   return (
    //     //     //     <div key={pokemons._id}>
    //     //     //       <h2>Name: {pokemons.name}</h2>
    //     //     //       <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //     //       <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //     //       <h2>Species: {pokemons.species}</h2>
    //     //     //       <h2>Height: {pokemons.height}</h2>
    //     //     //       <h2>Weight: {pokemons.weight}</h2>
    //     //     //       <h2>Abilities: </h2>
    //     //     //               <ul>
    //     //     //                     <li>{pokemons.abilities[i]}</li>
    //     //     //               </ul>
    //     //     //       <h2>Region: {pokemons.region}</h2>
    //     //     //     </div>
    //     //     //   )
    //     //     // }

    //     //     if (pokemons.abilities.length == 1) {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //         </div>
    //     //       )
    //     //     } else if (pokemons.abilities.length == 2) {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                         <li>{pokemons.abilities[1]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //         </div>
    //     //       )
    //     //     } else {
    //     //       return (
    //     //         <div key={pokemons._id}>
    //     //           <h2>Name: {pokemons.name}</h2>
    //     //           <h2>Dex Number: {pokemons.dexNumber}</h2>
    //     //           <h2>Type: {pokemons.type[0]}  {pokemons.type[1]}</h2>
    //     //           <h2>Species: {pokemons.species}</h2>
    //     //           <h2>Height: {pokemons.height}</h2>
    //     //           <h2>Weight: {pokemons.weight}</h2>
    //     //           <h2>Abilities: </h2>
    //     //                   <ul>
    //     //                         <li>{pokemons.abilities[0]}</li>
    //     //                         <li>{pokemons.abilities[1]}</li>
    //     //                         <li>{pokemons.abilities[2]}</li>
    //     //                   </ul>
    //     //           <h2>Region: {pokemons.region}</h2>
    //     //         </div>
    //     //       )
    //     //     }
    //     //   }
        })}
      </>
    )
  }
  
  export async function getServerSideProps(context) {
    // dbConnect();

    const { pokemon } = context.params;

    const capitalize = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
  
    /* find a specific data in our database */
    const result = await PokeModel.find({ name: capitalize}).populate({path: 'otherForms', select: '-_id -refPokemon', model: FormModel});
    const pokemons = result.map((doc) => {
      const pokeDB = doc.toObject()
      pokeDB._id = pokeDB._id.toString()
      return pokeDB
    })

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();

    return { props: { 
      pokeApi: data,
      pokeDB: pokemons
    }, }
  }