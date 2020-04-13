"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayWithout(array) {
    var valuesToExclude = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        valuesToExclude[_i - 1] = arguments[_i];
    }
    return array.filter(function (value) {
        return !valuesToExclude.includes(value);
    });
}
exports.default = arrayWithout;
