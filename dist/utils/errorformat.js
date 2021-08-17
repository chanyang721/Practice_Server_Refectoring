"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageFormat = (statusCode, message, error) => {
    return { statusCode, message, error };
};
exports.default = messageFormat;
