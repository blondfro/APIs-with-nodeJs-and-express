import mongoose from "mongoose";
import { ContactSchema} from "../models/crm-model";

// this creates a new constructor from the mongoose model.
const Contact = mongoose.model("Contact", ContactSchema);

// GET all contacts.
export const getContacts = (req, res) => {
    Contact.find( {}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact);
    })
};

// GET contact by ID
export const getContactByID = (req, res) => {
    Contact.findById( req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact);
    })
};

// POST
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact);
    })
};

// PUT / Update contact contact by ID
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact);
    })
};