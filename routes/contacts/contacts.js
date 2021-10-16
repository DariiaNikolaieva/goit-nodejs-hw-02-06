const express = require('express')

const router = express.Router()

const {
  getContactsList,
  getContactById,
  addContact,
  deleteContactById,
  updateContactById,
  updateStatusContact,
} = require('../../controllers/contacts-controllers')

const { validateContactId, validateContact, validateUpdateContact, validateStatusContact } = require('./contact-validation.js')

router.get('/', getContactsList)

router.get('/:contactId', validateContactId, getContactById)

router.post('/', validateContact, addContact)

router.delete('/:contactId', validateContactId, deleteContactById)

router.put('/:contactId', validateContactId, validateUpdateContact, updateContactById)

router.patch('/:contactId', [validateContactId, validateUpdateContact], updateContactById)

router.patch('/:contactId/favorite', [validateContactId, validateStatusContact], updateStatusContact)

module.exports = router
