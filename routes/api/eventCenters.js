const router = require('express').Router();
const passport = require('passport');

//Event model
const EventCenter = require('../../models/eventCenterModel');
//user model
const User = require('../../models/userModel');

//validations helper
const validateEventInput = require('../../validation/eventCenter');

//@route GET api/eventcenters/test
//@desc Test post route
//access Public
router.get('/test',(req,res) =>{
    res.json({msg: 'all correct sir from event centers'})
});

//@route GET api/eventcenters
//@desc Get all available event centers
//@access public

router.get('/', (req,res) =>{
    EventCenter.find()
        .sort({date: -1})
        .then(eventCenter => res.json(eventCenter))
        .catch(err => res.status(400).json({NoEventFound:"No event center found"}));
});

//@route GET api/eventcenters/:id
//@desc Get event centers withe the specified details
//@access Public
router.get('/:id', (req,res) =>{
    EventCenter.findById(req.params.id)
        .then(eventCenter =>{
            if(eventCenter) res.json(eventCenter);
            else {
                res.status(400).json({NoEventFound: 'No event center found'})
            }
        })
        .catch(err =>{
            res.status(404).json({NoEventCenterFound: 'No event center found'})
        });
})

//@route POST api/eventcenter
//@dest Creating event centers
//@access Private
router.post('/', passport.authenticate('jwt',{session: false}), (req,res)=>{
    const {errors,isValid} = validateEventInput(req.body);
    if(!isValid) res.status(400).json(errors);
    //try adding the userId from the server 
    //check if the req.body has detail of the user
    const {name,location,capacity,type,price} = req.body;
    const newEventCenter = new EventCenter({
        userId: req.user.id,
        name,
        location,
        capacity,
        type,
        price
    })

    newEventCenter.save()
        .then(eventCenter => res.json(eventCenter))
        .catch(err => console.log(err));
});

module.exports = router;