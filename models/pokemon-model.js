import mongoose, {Schema} from "mongoose";

const PokemonModel = new Schema({
    dexNumber: {
        type: Number
    },
    name: {
        type: String
    },
    type: [{
        type: String
    }]
})
