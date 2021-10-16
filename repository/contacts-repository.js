const Contact = require('../model/contact-model')

const listContacts = async (userId) => {
  return await Contact.find({owner: userId}).populate({path: "owner", select: "name email"})
}

const getContactById = async (contactId, userId) => {
  const result = await Contact.findOne({_id: contactId, owner: userId}).populate({path: "owner", select: "name email"})
  return result
}

const removeContact = async (contactId, userId) => {
  const result = await Contact.findOneAndRemove({_id: contactId, owner: userId})
  return result
}

const addContact = async (body) => {
  const result = await Contact.create(body)
  return result
}

const updateContact = async (contactId, body, userId) => {
  const result = await Contact.findOneAndUpdate({_id: contactId, owner: userId}, { ...body }, { new: true })
  return result
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
