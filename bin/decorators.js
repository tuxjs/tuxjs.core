"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var reflection_helpers_1 = require("./reflection-helpers");
function injectable() {
    return function (target) {
        container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
    };
}
exports.injectable = injectable;
function inject(token) {
    return function (target, _propertyKey, parameterIndex) {
        var injectionToken = Reflect.getOwnMetadata(reflection_helpers_1.INJECTION_TOKEN_METADATA_KEY, target) || {};
        injectionToken[parameterIndex] = token;
        Reflect.defineMetadata(reflection_helpers_1.INJECTION_TOKEN_METADATA_KEY, injectionToken, target);
    };
}
exports.inject = inject;
//# sourceMappingURL=decorators.js.map