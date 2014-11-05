/**
 * Created with IntelliJ IDEA.
 * User: admin
 * Date: 10/29/14
 * Time: 9:36 AM
 * To change this template use File | Settings | File Templates.
 */

// Import the required modules.
var express = require('express');
var router = express.Router();

// Get the model for the Contact resource.
var Contact = require('../models/contact.js');


// Add the middleware that handles access to the
// Contact resource.
router.route('/')

    // Handle the GET method.
    .get(function(req, res) {
        // Get all the Contacts and return them.
        Contact.find(function(err, contacts) {
            res.json(contacts);
        });
    })

    // Handle the PUT method.
    .put(function(req, res) {
        message = 'The request method is not supported by this resource.';
        res.status(405).send(message);
    })


    // Handle the POST method.
    .post(function(req, res) {
        // Create a new Contact.
        // One should take into account that the user can send also
        // a list of contacts; this case is not covered here.
        var contact = new Contact();

        // Init the contact with the supplied data.
        contact.name = req.body.name;
        contact.phoneNumber = req.body.phoneNumber;
        contact.email = req.body.email;

        // Save the contact.
        contact.save(function(err) {
           if (err) {
               // There was an error saving the contact.
               message = 'Request cannot be fulfilled due to bad syntax.';
               res.status(400).send(message);
           } else {
               message = 'Request has been fulfilled; new resource created.';
               res.status(201).send(message);
           }
        });
    })


    // Handle the DELETE method.
    .delete(function(req, res) {
        // Remove all the entries found in the agenda.
        Contact.find().remove(function(err) {
            if (err) {
                // There was an error removing the contacts.
                message = 'The server has experience some problems.';
                res.status(500).send(message);
            } else {
                message = 'Request processed, no content returned';
                res.status(204).send(message);
            }
        });
    });

// Expose the object outside file scope.
module.exports = router;