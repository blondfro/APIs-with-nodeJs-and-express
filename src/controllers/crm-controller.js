import mongoose from "mongoose";
import { ContactSchema} from "../models/crm-model";

// this creates a new constructor from the mongoose model.
const Contact = mongoose.model("Contact", ContactSchema);

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