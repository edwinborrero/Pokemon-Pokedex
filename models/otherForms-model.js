import mongoose, {Schema} from "mongoose";

const FormsModel = new Schema({
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
    refPokemon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon',
    }
})

module.exports = mongoose.models.Form || mongoose.model('Form', FormsModel);