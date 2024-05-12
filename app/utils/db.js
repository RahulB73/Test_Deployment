import mongoose from 'mongoose';

const uri = 'mongodb+srv://rahulborkar2001:SagarPass@cluster0.ze0ijuv.mongodb.net/';



const connect = async () => {

    try {
        const connection = await mongoose.connect(uri);
        console.log("Connection to Database is Successful");
    } catch (err) {
        console.log("Connection to Database is Failed");
        console.log(err);
    }
};

export default connect;



