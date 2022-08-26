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
    species: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    abilities: [{
        type: String
    }],
    form: {
        type: String
    },
    other_forms: [{
        type: String
    }],
    region: {
        type: String
    }
})

module.exports = mongoose.models.Pokemon || mongoose.model('Pokemon', PokemonModel);
//export default mongoose.model('Pokemon', PokemonModel);