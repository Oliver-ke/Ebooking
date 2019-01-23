const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys_dev')


//load in validations
const validateRegInput = require('../../validation/register')
const validateLogin = require('../../validation/login');

//bringin user model
const User = require('../../models/userModel');

//@route Get api/users/test
router.get('/test',(req,res) =>{
    res.json({msg: 'all correct sir from users'});
})

//@route POST api/users/register
//@desc Register User
//@access public
router.post('/register',(req,res) =>{
    const {errors, isValid} = validateRegInput(req.body);
    
    //check validation
    if(!isValid) res.status(400).json(errors);

    //passed input validation check
    User.findOne({email: req.body.email})
        .then((user) =>{
            const {name,email,password,phone} = req.body
            if(user){
                errors.email = 'Email already exist';
                return res.status(400).json(errors);
            }
            const newUser = new User({
                name,
                email,
                password,
                phone
            })
            bcrypt.genSalt(10, (err,salt) =>{
                bcrypt.hash(newUser.password, salt, (err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        })

})

//@route GET api/user/login
//desc Login User / Returning a JWT token
//@access Public
router.post('login', (req,res) =>{
    const {errors, isValid} = validateLogin(req.body);
    
    //check input validation
    if(!isValid) res.status(400).json(errors);

    const {email,password} = req.body;

    //Find the user by the email
    User.findOne({email})
        .then(user =>{
            //check for user
            if(!user){
                errors.email = 'User not found';
                return res.status(400).json(errors);
            }
            
            //check the password
            bcrypt.compare(password,user.password)
                .then(isMatch =>{
                    if(isMatch){
                        //create a jwt payload
                        const payload = {id: user.id, name: user.name}

                        //sign token
                        jwt.sign(payload,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        });
                        
                    } else{
                        errors.password = 'Password Incorrect';
                        return res.status(400).json(errors);
                    }
                })
        })

})

//@route GET api/users/current
//@desc Returns the current user
//@access Private
router.get('/current', passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})

module.exports = router;