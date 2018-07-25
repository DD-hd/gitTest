"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
function id(x) {
    console.log(x);
    return x;
}
exports.id = id;
function templateObjectFactory() {
    return id(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hello world"], ["hello world"])));
}
exports.templateObjectFactory = templateObjectFactory;
var result = templateObjectFactory() === templateObjectFactory(); // TS 2.6 为 true
var templateObject_1;
