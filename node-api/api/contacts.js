const express = require("express");
const db = require("../db/database");
const Joi = require('joi');
const Contact = require("../domain/contact");

const router = express.Router();


router.post("/add", (req, res, next) => {
    //read contact information from request
    const schema = Joi.object().keys({
        name: Joi.string().alphanum().required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        message: Joi.string().required(),
        organization : Joi.string().allow(null, ''),
        phone : Joi.string().allow(null, '')
    });
    const result = Joi.validate(req.body, schema);
    if(result.error)
    {
        res.status(400).send(result.error.details);
        return;
    }
    else
    {
        let contact = new Contact(req.body.name, req.body.email, req.body.phone, req.body.organization, req.body.message);
        db.query(contact.getAddContactSQL(), (err, data)=> {
            res.status(200).json({
                message:"Contact added.",
                contactId: data.insertId
            });
        });
    }
    
});
module.exports = router;