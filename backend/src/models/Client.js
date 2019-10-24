const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required:true
    }
});

ClientSchema.plugin(mongoosePaginate);

mongoose.model("Client", ClientSchema);