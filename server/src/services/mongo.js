const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.prependOnceListener('open',()=>{
    console.log('MongoDB Connection ready!');
});

mongoose.connection.on('error',(err)=>{
    console.log(err);
});

async function mongoConnect ()
{
    await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect  //exporting the connection method to be used in other files
}