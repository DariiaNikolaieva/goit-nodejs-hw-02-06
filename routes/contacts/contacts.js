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

const guard = require('../../helpers/guard')

router.get('/', guard, getContactsList)

router.get('/:contactId', guard, validateContactId, getContactById)

router.post('/', guard, validateContact, addContact)

router.delete('/:contactId', guard, validateContactId, deleteContactById)

router.put('/:contactId', guard, validateContactId, validateUpdateContact, updateContactById)

router.patch('/:contactId', guard, [validateContactId, validateUpdateContact], updateContactById)

router.patch('/:contactId/favorite', guard, [validateContactId, validateStatusContact], updateStatusContact)

module.exports = router
