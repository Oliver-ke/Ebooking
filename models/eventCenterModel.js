const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventCenterSchema = Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'eBooking-users'
    },
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true
    },
    type: {
        type: String, // here we define if its outdoor of indoor
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    // eventImageUrls: [
    //     {
    //         url:{
    //             type: String
    //         },
    //     }
    // ]
})

const EventModel = mongoose.model('event-centers', EventCenterSchema);
module.exports = EventModel