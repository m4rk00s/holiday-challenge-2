const express = require('express');
const { ContactController } = require('../controllers');

const router = express.Router();

// create one contact
router.post('/', ContactController.addContact);

// read one contact
router.get('/:id', ContactController.readOneContact);

// read all contacts
router.get('/', ContactController.readAllContacts);

// update one contact
router.put('/:id', ContactController.updateContact);

// delete one contact
router.delete('/:id', ContactController.deleteContact);

module.exports = router;
