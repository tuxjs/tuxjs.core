"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var providers_1 = require("./providers");
var Container = /** @class */ (function () {
    function Container(parent) {
        this.parent = parent;
        this._registry = new Map();
    }
    Container.prototype.register = function (token, provider, options) {
        this._registry.set(token, { provider: provider });
        return this;
    };
    Container.prototype.registerType = function (from, to) {
        if (providers_1.isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    };
    Container.prototype.registerInstance = function (token, instance) {
        return this.register(token, {
            useValue: instance
        });
    };
    Container.prototype.resolve = function (token) {
        var registration = this.getRegistration(token);
        // if (registration) {
        //     return registration.provider.
        // }
        return this.construct(token);
    };
    Container.prototype.construct = function (ctor) {
        var _this = this;
        if (ctor.length === 0) {
            return new ctor();
        }
        var paramInfo = exports.typeInfo.get(ctor);
        if (!paramInfo || paramInfo.length === 0) {
            throw "TypeInfo not known for " + ctor;
        }
        var params = paramInfo.map(function (param) { return _this.resolve(param); });
        return new (ctor.bind.apply(ctor, [void 0].concat(params)))();
    };
    Container.prototype.isRegistered = function (token) {
        return this._registry.has(token);
    };
    Container.prototype.getRegistration = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    };
    return Container;
}());
exports.Container = Container;
exports.typeInfo = new Map();
exports.instance = new Container();
//# sourceMappingURL=container.js.map