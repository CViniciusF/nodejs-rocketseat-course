const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//creates new product schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//add plugin for pagination on schema
ProductSchema.plugin(mongoosePaginate);
//registering model so the application can know it exists
mongoose.model('Product', ProductSchema);