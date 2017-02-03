"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 1, firstname: 'admin', lastname: 'admin', login: 'admin', password: 'password', email: 'admin.admin@tuto.com', role: 'admin' },
            { id: 2, firstname: 'user', lastname: 'user', login: 'user', password: 'password', email: 'user.user@tuto.com', role: 'user' }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map