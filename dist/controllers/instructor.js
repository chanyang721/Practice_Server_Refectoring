"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const requestFormat_1 = __importDefault(require("../utils/requestFormat"));
const { responseFormat } = typedi_1.Container.get(requestFormat_1.default);
