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
router.route('/:id')

    // Handle the GET method.
    .get(function(req, res) {
        // Construct the query to obtain the desired Contact.
        var ContactQuery = Contact.where({email: req.params.id});

        // Query for the requested contact.
        ContactQuery.findOne(function(err, contact) {
            if (err) {
                // The contact was not found.
                message = 'The server has experienced some problems.'
                res.status(500).send(message);
            } else {
                if (contact === null) {
                    // There is no match.
                    message = 'The requested resource could not be found.'
                    res.status(404).send(message);
                } else {
                    res.send(contact);
                }
            }
        });
    })

    // Handle the PUT method.
    .put(function(req, res) {
        // Construct the query to obtain the desired Contact.
        var ContactQuery = Contact.where({email: req.params.id});

        // Query for the requested contact.
        ContactQuery.findOne(function(err, contact) {
            if (err) {
                // The contact was not found.
                message = 'The server has experienced some problems.'
                res.status(500).send(message);
            } else {
                if (contact === null) {
                    // There is no match.
                    message = 'The requested resource could not be found.'
                    res.status(404).send(message);
                } else {
                    // Update the contact details.
                    contact.name = req.body.name;
                    contact.phoneNumber = req.body.phoneNumber;
                    contact.email = req.body.email;

                    contact.save(function(err) {
                        if (err) {
                            // There was an error saving the contact.
                            message = 'Request cannot be fulfilled due to bad syntax.';
                            res.status(400).send(message);
                        } else {
                           // Request processed, no content returned.
                            res.status(204).end();
                        }
                    });
                }
            }
        });
    })


    // Handle the POST method.
    .post(function(req, res) {
        message = 'The request method is not supported by this resource.';
        res.status(405).send(message);
    })


    // Handle the DELETE method.
    .delete(function(req, res) {
        // Remove the Contact from the agenda.
        contactToRemove = {email: req.params.id};

        Contact.remove(contactToRemove, function(err) {
            if (err) {
                // There was an error removing the contact.
                message = 'Request could not be processed because of a conflict.'
                res.status(409).send(message);
            } else {
                // Request processed, no content returned.
                res.status(204).end();
            }
        });
    });

// Expose the object outside file scope.
module.exports = router;