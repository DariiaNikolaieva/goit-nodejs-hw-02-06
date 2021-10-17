const Contact = require('../model/contact-model')

const listContacts = async (userId, query) => {
  // return await Contact.find({owner: userId}).populate({path: "owner", select: "name email"})
const {sortBy, sortByDesc, favorite, limit = 5, offset = 0} = query;
if (favorite !== null) {
  searchOptions.favorite = favorite;
}
const searchOption = {owner: userId};
const results = await Contact.paginate(searchOption, {
  limit, 
  offset, 
  sort: {
    ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
    ...(sortByDesc ? { [`${sortByDesc}`]: -1 } : {}),
  },
  populate: {
    path: "owner", 
    select: "name email"
  }
})
const {docs: contacts} = results;
delete results.docs
return {...results, contacts};
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
