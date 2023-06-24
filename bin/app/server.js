const cors = require('cors');
const wrapper = require('../helpers/utils/wrapper');
const bodyParser = require('body-parser');
const mongoConnectionPooling = require('../helpers/databases/mongodb/connection');
const express = require('express');
const contactListHandler = require('../modules/contactList/handlers/api_handler');

function AppServer() {
    this.server = express();

    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));

    this.server.use(cors());

    this.server.get('/', (req, res) => {
        wrapper.response(res, 'success', wrapper.data('Contact List API'), 'This services is running properly.');
    });

    //Routing
    //this.server.{post/get/put/delete}
    this.server.post('/contact-list', contactListHandler.inputContact);
    this.server.get('/contact-list/view', contactListHandler.getAllContact);
    this.server.get('/contact-list/view/:id', contactListHandler.getOneContact);
    this.server.put('/contact-list/view/:id', contactListHandler.updateContact);
    this.server.delete('/contact-list/view/:id', contactListHandler.deleteContact);

    // exception handling
    this.server.use((error, req, res, next) => {
        res.status(error.status || 500).json({
            error: {
                message: error.message
            }
        });
    });

    mongoConnectionPooling.init();
}

module.exports = AppServer;