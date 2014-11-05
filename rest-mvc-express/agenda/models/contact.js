/**
 * Created with IntelliJ IDEA.
 * User: admin
 * Date: 10/29/14
 * Time: 9:37 AM
 * To change this template use File | Settings | File Templates.
 */

// Import the required modules.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema for the Contact resource.
// Each schema maps to a MongoDB Collection and it
// defines the shape of the document within that collection.
var ContactSchema = new Schema({
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true}
});


// Convert the ContactSchema into a model we can work with.
var Contact = mongoose.model('Contact', ContactSchema);


// Expose the Contact model outside the file.
module.exports = Contact;