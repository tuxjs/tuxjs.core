"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
exports.injectable = decorators_1.injectable;
exports.inject = decorators_1.inject;
var container = __importStar(require("./container"));
var Container = container.instance;
exports.Container = Container;
//# sourceMappingURL=index.js.map