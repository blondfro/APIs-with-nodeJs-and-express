import * as contact from "../controllers/crm-controller";

const routes = (app) => {
    app.route("/contact")
        // get all contacts
        .get((req, res, next) => {
            // middleware
            console.log("Request from: " + req.originalUrl);
            console.log("Request type: " + req.method);
            next();
        }, (contact.getContacts))
        // add a new contact
        .post(contact.addNewContact);

    app.route("/contact/:contactID")
        // get specific contact
        .get(contact.getContactByID)
        // update specific contact
        .put(contact.updateContact)
        // delete specific contact
        .delete(contact.deleteContact)
};

export default routes;