import { useState, useEffect } from 'react';
import PokeModel from '../../models/pokemon-model';
//import dbConnect from '../../database/database';

const AllPokemon = () => {
    
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/allPokemon").then((res) => setData(res.json()));
        setLoading(false);
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Pokemon found</p>

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default AllPokemon;


// export default async function handler(req, res) {
    
//     //dbConnect();

//     try{
//         const pokemon = await PokeModel.find({})
//         res.status(200).json({ success: true, data: pokemon })
//     } catch (error) {
//         res.status(404).json({ success: false })
//     }
// }