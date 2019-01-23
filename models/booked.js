const mongoose = require('mongoose');
const Schema = mongoose.Schema;

BookedSchema = Schema({
    eventId:{
        type: Schema.Types.ObjectId,
        ref: 'event-centers'
    },
    bookDate: {
        type: Date,
        required: true
    },
    requestContact: {
        type: String,
        required: true
    },
    requestDate: {
        type: Date,
        default: Date.now
    }

})

const Booked = mongoose.model('booked-event', BookedSchema)
module.exports = Booked