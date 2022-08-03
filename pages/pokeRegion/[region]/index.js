import { useRouter } from "next/router";
import Link from "next/link";

const Region = () => {
    const router = useRouter();
    const { region } = router.query;

    return (
        <>
            <h1>Region: {region}</h1>
        </>
    );
};

export default Region;


// import PokeModel from '../../models/pokemon-model';
// import dbConnect from '../../database/database'; 

// export default async function handler(req, res) {

//     dbConnect();

//     try {
//         const pokemon = await PokeModel.find({ region: req.params.region });
//         res.status(200).json({ success: true, data: pokemon })
//     } catch (error) {
//         res.status(404).json({ success: false })
//     }

// }