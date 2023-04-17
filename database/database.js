import mongoose from "mongoose";

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://pkdtdev:Pokemondex@clusterpk.yhber9g.mongodb.net/Poke-dex',
         {useNewUrlParser: true, useUnifiedTopology: true},
         () => console.log('Connected to DB'));
    mongoose.connection
        .once('open', () => console.log('MongoDB running'))
        .on('error', err => console.log(err))
};