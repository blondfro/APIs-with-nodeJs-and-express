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