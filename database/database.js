import mongoose from "mongoose";

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1:27017/Poke-DEX',
         {useNewUrlParser: true, useUnifiedTopology: true},
         () => console.log('Connected to DB'));
    mongoose.connection
        .once('open', () => console.log('MongoDB running'))
        .on('error', err => console.log(err))
};