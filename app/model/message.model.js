"use strict";
// const test = () => {
// const test: ClassDecorator = (data: any) => {
//   console.log(data);
//   return (target: Function) => {
//     console.log(target);
//   };
// };
Object.defineProperty(exports, "__esModule", { value: true });
// const deprecated: ClassDecorator = (target: Function ) => {
//   console.log('this has been deprecated');
// };
// @test({ foo: 'bar' }) @deprecated
var Message = /** @class */ (function () {
    function Message(text, created) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        this.text = text;
        this.created = created;
    }
    Message.newEmptyMessage = function () {
        return new Message();
    };
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
