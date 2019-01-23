const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = (data) =>{
    let errors = {};
    data.userId = isEmpty(data.userId) ? data.userId : '';
    data.name = isEmpty(data.userId) ? data.name : '';
    data.location = isEmpty(data.userId) ? data.location : '';
    data.capacity = isEmpty(data.userId) ? data.capacity : '';
    data.type = isEmpty(data.userId) ? data.type : '';
    data.price = isEmpty(data.userId) ? data.price : '';

    if(validator.isEmpty(data.userId)) {
        errors.userId = "Users ID is empty";
    }
    if(validator.isEmpty(data.name)){
        errors.name = "Event Center name is empty";
    }
    if(validator.isEmpty(data.location)){
        errors.location = "Location is Empty"
    }
    if(validator.isEmpty(data.capacity)){
        errors.capacity = "Event Center Capacity is Empty"
    }
    if(validator.isEmpty(type)){
        errors.type = "Event Center type is empty, not this can either be indoor or outdoor"
    }
    if(validator.isEmpty(data.price)){
        errors.price = "Event Center Price is Empty"
    }
    if(!validator.isNumeric(data.price)){
        errors.price = "Event Center must have a price"
    }

    return errors;

}