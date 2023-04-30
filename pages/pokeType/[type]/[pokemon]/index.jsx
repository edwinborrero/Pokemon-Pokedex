import PokeModel from '../../../../models/pokemon-model';
import FormModel from '../../../../models/otherForms-model';
import dbConnect from '../../../../database/database';
import React, { useEffect } from 'react';

export default function Pokemon({ pokeApi, pokeDB }) {

    let math_height = pokeApi.height / 10;
    let math_weight = pokeApi.weight / 10;

    const pokeAbilities = [];

    for (let i=0; i < pokeApi.abilities.length; i++) {
        pokeAbilities.push(pokeApi.abilities[i].ability.name);
    }

    useEffect(() => {

        let list = document.getElementById("abilities_list");

        pokeAbilities.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
        });

    });

    return (
        <>
            <h1>Pokemon Information</h1>
            {pokeDB.map((pokemons) => {

                if(pokeApi.types.length == 1) {

                    return (
                    <div key={pokemons._id}>
                        <h2>Name: {pokemons.name}</h2>
                        <h2>Dex Number: {pokemons.dexNumber}</h2>
                        <h2>Species: {pokemons.species}</h2>
                        <h2>Type: {pokeApi.types[0].type.name}</h2>
                        <h2>Height: {math_height}m</h2>
                        <h2>Weight: {math_weight}kg</h2>
                        <h2>Abilities: </h2>
                            <ul id = "abilities_list"></ul>
                        <h2>Base Stats: </h2>
                            <ul>
                            <li>HP: {pokeApi.stats[0].base_stat}</li>
                            <li>Attack: {pokeApi.stats[1].base_stat}</li>
                            <li>Defense: {pokeApi.stats[2].base_stat}</li>
                            <li>Sp. Attack: {pokeApi.stats[3].base_stat}</li>
                            <li>Sp. Defense: {pokeApi.stats[4].base_stat}</li>
                            <li>Speed: {pokeApi.stats[5].base_stat}</li>
                            </ul>
                        <h2>Official Artwork: </h2>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeApi.id}.png`}></img>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeApi.id}.png`}></img>
                    </div>
                    )
                } else {

                    return (
                    <div key={pokemons._id}>
                        <h2>Name: {pokemons.name}</h2>
                        <h2>Dex Number: {pokemons.dexNumber}</h2>
                        <h2>Species: {pokemons.species}</h2>
                        <h2>Type: {pokeApi.types[0].type.name}  {pokeApi.types[1].type.name}</h2>
                        <h2>Height: {math_height}m</h2>
                        <h2>Weight: {math_weight}kg</h2>
                        <h2>Abilities: </h2>
                            <ul id = "abilities_list"></ul>
                        <h2>Base Stats: </h2>
                            <ul>
                            <li>HP: {pokeApi.stats[0].base_stat}</li>
                            <li>Attack: {pokeApi.stats[1].base_stat}</li>
                            <li>Defense: {pokeApi.stats[2].base_stat}</li>
                            <li>Sp. Attack: {pokeApi.stats[3].base_stat}</li>
                            <li>Sp. Defense: {pokeApi.stats[4].base_stat}</li>
                            <li>Speed: {pokeApi.stats[5].base_stat}</li>
                            </ul>
                        <h2>Official Artwork: </h2>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeApi.id}.png`}></img>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeApi.id}.png`}></img>
                    </div>
                    )
                }
            })}
        </>
    );
};

export async function getServerSideProps(context) {
    //dbConnect();

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