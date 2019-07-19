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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
require("reflect-metadata");
var Dog = /** @class */ (function () {
    function Dog() {
        this._name = "Wofl";
    }
    Dog.prototype.getName = function () {
        return this._name;
    };
    Dog = __decorate([
        index_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Dog);
    return Dog;
}());
exports.Dog = Dog;
var Meow = /** @class */ (function () {
    function Meow() {
        this._name = "Meow";
    }
    Meow.prototype.getName = function () {
        return this._name;
    };
    Meow = __decorate([
        index_1.injectable(),
        __metadata("design:paramtypes", [])
    ], Meow);
    return Meow;
}());
exports.Meow = Meow;
var CollectionPet = /** @class */ (function () {
    function CollectionPet(dog, meow) {
        this._dog = dog;
        this._meow = meow;
    }
    CollectionPet.prototype.getDogName = function () {
        return this._dog.getName();
    };
    CollectionPet.prototype.getMeowName = function () {
        return this._meow.getName();
    };
    CollectionPet = __decorate([
        index_1.injectable(),
        __param(0, index_1.inject(Dog)),
        __param(1, index_1.inject(Meow)),
        __metadata("design:paramtypes", [Dog,
            Meow])
    ], CollectionPet);
    return CollectionPet;
}());
exports.CollectionPet = CollectionPet;
var collectionPet = index_1.Container.resolve(CollectionPet);
console.log(collectionPet.getDogName());
console.log(collectionPet.getMeowName());
//# sourceMappingURL=test.js.map