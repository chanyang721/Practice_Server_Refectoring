"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = exports.Macbook = exports.Laptop = void 0;
require("reflect-metadata");
const typedi_1 = require("typedi");
let Laptop = class Laptop {
    printMessage() {
        console.log("I am Laptop!");
    }
};
Laptop = __decorate([
    typedi_1.Service()
], Laptop);
exports.Laptop = Laptop;
let Macbook = class Macbook extends Laptop {
    printMessage() {
        console.log("I am Macbook!");
    }
};
Macbook = __decorate([
    typedi_1.Service()
], Macbook);
exports.Macbook = Macbook;
let ExampleService = class ExampleService {
    constructor(laptop) {
        this.laptop = laptop;
    }
    printMessage() {
        console.log("I am ExampleService!");
    }
};
ExampleService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [Laptop])
], ExampleService);
exports.ExampleService = ExampleService;