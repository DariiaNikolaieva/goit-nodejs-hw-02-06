const Contacts = require('../repository/contacts-repository')

const getContactsList = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contacts = await Contacts.listContacts(userId);
    res.json({ status: 'success', code: 200, data: { contacts } })
  } catch (error) {
    next(error)
  }
}

const getContactById = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.getContactById(req.params.contactId, userId)

    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } })
    }

    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' })
  } catch (error) {
    next(error)
  }
}

const addContact = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.addContact({...req.body, owner: userId})
    res.status(201).json({ status: 'success', code: 201, data: { contact } })
  } catch (error) {
    next(error)
  }
}

const deleteContactById = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.removeContact(req.params.contactId, userId)

    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } })
    }

    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' })
  } catch (error) {
    next(error)
  }
}

const updateContactById = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.updateContact(
      req.params.contactId,
      req.body,
      userId
    )

    if (contact) {
      return res
        .status(200)
        .json({ status: 'success', code: 200, data: { contact } })
    }

    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not found' })
  } catch (error) {
    next(error)
  }
}

const updateStatusContact = async (req, res, next) => {
  try {
    const contact = await Contacts.updateContact(
      req.params.contactId,
      req.body
    )
    if (contact) {
      return res.status(200).json({
        status: 'success',
        code: 200,
        data: { contact },
        message: `Status contact with name ${req.body.name} updated!`,
      })
    }
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id ${req.params.contactId} not found!`,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getContactsList,
  getContactById,
  addContact,
  deleteContactById,
  updateContactById,
  updateStatusContact,
}