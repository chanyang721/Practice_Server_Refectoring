"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
exports.default = (app) => {
    app.use(express_1.default.json());
    app.use(cookie_parser_1.default());
    app.use(cors_1.default({
        origin: true,
        credentials: true
    }));
};
