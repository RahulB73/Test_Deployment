import mongoose from 'mongoose';
const { Schema } = mongoose;


const clientSchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }

);

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
