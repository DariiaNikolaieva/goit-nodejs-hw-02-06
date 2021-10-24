const {updateContactById} = require('../controllers/contacts-controllers')
const Contacts = require('../repository/contacts-repository');

jest.mock('../repository/contacts-repository');

describe('Unit test controller updateContactById', () => {

    const req = { params: {contactId: 3}, body: {}, user: {_id: 1}}
    const res = {}
    const next = jest.fn()

    it('Contact exists', async () => {
        Contacts.updateContactById = jest.fn(() => {
            return {
                contactId: 3,
                name: "Allen Raymond",
                phone: "(992) 914-3792"
            }
        })
        const result = await updateContactById(req, res, next);
        console.log(result);
    })
    it('Contact does not exist', () => {

    })
})