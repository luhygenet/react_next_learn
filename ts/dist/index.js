"use strict";
var _a;
function getCustomer(isIt) {
    return isIt === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
