import mongoose, {Schema} from "mongoose";

const PokemonModel = new Schema({
    dexNumber: {
        type: String
    },
    name: {
        type: String
    },
    type: [{
        type: String
    }],
    region: {
        type: String
    }
})

export default mongoose.model('Pokemon', PokemonModel);