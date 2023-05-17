import PokeModel from '../../models/pokemon-model';
import FormModel from '../../models/otherForms-model';
import dbConnect from '../../database/database';
import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Chart } from 'chart.js/auto';

export default function AllPokemon({ pokeApi, pokeDB }) {

  //Performs the calculation of height and weight of selected pokemon since in the external API doesn't appear correctly calculated
  let math_height = pokeApi.height / 10;
  let math_weight = pokeApi.weight / 10;

  //Stores pokemons abilities in an array to add them dynamically bellow
  const pokeAbilities = [];

  for (let i=0; i < pokeApi.abilities.length; i++) {

    //Takes each name of an ability and capitalizes it. If the name has the special character "-", it replaces with empty space.
    let re = /(\b[a-z](?!\s))/g;
    const pa = pokeApi.abilities[i].ability.name;
    const cap = pa.replace(re, function(x){return x.toUpperCase()});
    const newA = cap.replace("-", " ");

    pokeAbilities.push(newA);
  }

  //Stores pokemons base stats in an array for easy access when charting.
  const pokeStats = [];

  for(let i=0; i < pokeApi.stats.length; i++) {
    pokeStats.push(pokeApi.stats[i].base_stat);
  }

  //Swaps two specific base stats from the array above for charting in a specific way that is used commonly. 
  function swapStats(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

  swapStats(pokeStats, 3, 5);

  //Configuration of the radar chart to be created.
  let chartId;

  const configuration = {
    type: 'radar',
      data: {
        labels: ["HP", "Atk", "Def", "Speed", "Sp. Def", "Sp. Atk"],
        datasets: [{
          label: "Stats",
          data: pokeStats,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
          borderWidth: 3,
        }],
      },
      options: {
        responsive: false,
        scales: {
          r: {
            min: 1,
            max: 255,
          }
        },
      }
  }

  useEffect(() => {

    //Adds pokemon abilities dynamically instead of "hardcoding" it
    let list = document.getElementById("abilities_list");

    pokeAbilities.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });

    //Verifies if a pokemon has 1 or 2 types and adds them dynamically
    let pokemon_type = document.getElementById("types");

    if (pokeApi.types.length == 1) {
      const typeDiv = document.createElement("div");
      typeDiv.setAttribute("class", `type-icon icon-${pokeApi.types[0].type.name}`);

      const image = document.createElement("img");
      image.setAttribute("src", `/images/icons/${pokeApi.types[0].type.name}.svg`);

      const typeName = document.createElement("a");
      typeName.setAttribute("class", "type-name");
      typeName.innerHTML = pokeApi.types[0].type.name;

      typeDiv.appendChild(image);
      typeDiv.appendChild(typeName);
      pokemon_type.appendChild(typeDiv);

    } else {
      const typeDiv1 = document.createElement("div");
      typeDiv1.setAttribute("class", `type-icon icon-${pokeApi.types[0].type.name}`);

      const typeDiv2 = document.createElement("div");
      typeDiv2.setAttribute("class", `type-icon icon-${pokeApi.types[1].type.name}`);

      const image1 = document.createElement("img");
      image1.setAttribute("src", `/images/icons/${pokeApi.types[0].type.name}.svg`);

      const image2 = document.createElement("img");
      image2.setAttribute("src", `/images/icons/${pokeApi.types[1].type.name}.svg`);

      const typeName1 = document.createElement("a");
      typeName1.setAttribute("class", "type-name");
      typeName1.innerHTML = pokeApi.types[0].type.name;

      const typeName2 = document.createElement("a");
      typeName2.setAttribute("class", "type-name");
      typeName2.innerHTML = pokeApi.types[1].type.name;

      typeDiv1.appendChild(image1);
      typeDiv1.appendChild(typeName1);
      typeDiv2.appendChild(image2);
      typeDiv2.appendChild(typeName2);
      pokemon_type.appendChild(typeDiv1);
      pokemon_type.appendChild(typeDiv2);
    }

    //Event listener for the shiny button. Changes the default pokemon image into the shiny pokemon image.
    const shiny_image = document.getElementById("imgClickAndChange");
    const shiny_button = document.getElementById("shinyButton");
    let toggle = true;

    shiny_button.addEventListener('click', function(){
        toggle = !toggle;
        if(toggle){
          shiny_image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeApi.id}.png`;
          shiny_button.style.backgroundColor = "initial";
        } else {
          shiny_image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeApi.id}.png`;
          shiny_button.style.backgroundColor = "#FFD700";
        }
    });

    //Construction of the radar chart.
    const rchrt = document.getElementById("chartId");
    if(chartId){
      chartId.destroy();
    }
    chartId = new Chart(rchrt, configuration);

  });
  
    return (
      <>
        <h1>Pokemon Information:</h1>
        {pokeDB.map((pokemons) => {

          return (
            <div key={pokemons._id}>
              <h2>Name: {pokemons.name}</h2>
              <h2>Dex Number: {pokemons.dexNumber}</h2>
              <h2>Species: {pokemons.species}</h2>
              <h2>Type: </h2>
              <div id="types" className='wrapper-type'></div>
              <h2>Height: {math_height}m</h2>
              <h2>Weight: {math_weight}kg</h2>
              <h2>Abilities: </h2>
                  <ul id="abilities_list"></ul>
              <h2>Base Stats: </h2>
                <canvas id="chartId" height="650" width="680"></canvas>
              <h2>Official Artwork: </h2>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeApi.id}.png`} id="imgClickAndChange"></img>
                  <div>
                    <Button variant="outlined" startIcon={<AutoAwesomeIcon/>} id="shinyButton">Shiny</Button>
                  </div>
            </div>
          )
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