/**
 * Created by antoine on 02/03/2017.
 */
const Index = require('../build/index').default;

describe("Index", () => {
    describe("=> getUsers", () => {
        it("should return a empty user list", next => {
            let index = new Index();
            let userlist = index.getUsers();
            expect(userlist.length).toBe(0);
        });
    });
});