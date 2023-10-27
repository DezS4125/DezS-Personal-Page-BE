const express = require ('express')
const contactController = require ('../controllers/contacts.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');

const router = express.Router();

router
    .route('/')
    .get(contactController.getContactsByFilter)
    .post(contactController.createContact)
    .delete(contactController.deleteAllContacts)
    .all(methodNotAllowed);
router
    .route('/:id')
    .get(contactController.getContact)
    .put(contactController.updateContact)
    .delete(contactController.deleteContact)
    .all(methodNotAllowed);

module.exports = router;