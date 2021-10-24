const guard = require('../helpers/guard');
const passport = require("../config/passport");
const { HttpCode } = require("../config/constants");

describe('Unit test guard helper', () => {
    const user = {token: '111222333'}
    const req = { get: user }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn((data) => data),
    }
    const next = jest.fn();

    beforeEach(() => {
    })

    it('User exists', async () => {
    })

    it('User exists with wrong token', async () => {
    })

    it('User does not exist', async () => {
    })
}