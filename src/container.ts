import * as Types from './types';
import { constructor } from "./types";
import { InjectionToken, Provider, isNormalToken } from "./providers";

type Registration<T = any> = {
    provider: Provider<T>;
    options: RegistrationOptions;
    instance?: T;
};

export class Container implements Types.Container {

    private _registry = new Map<InjectionToken<any>, any>();

    public constructor(private parent?: Container) { }

    register<T>(token: InjectionToken<T>, provider: Provider<T>, options?: Types.RegistrationOptions | undefined): Container {
        this._registry.set(token, { provider });
        return this;
    }

    registerType<T>(from: InjectionToken<T>, to: InjectionToken<T>): Container {
        if (isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }

         return this.register(from, {
             useClass: to
         });
    }

    registerInstance<T>(token: InjectionToken<T>, instance: T): Types.Container {
        return this.register(token, {
            useValue: instance
        });
    }

    resolve<T>(token: InjectionToken<T>): T {
        const registration = this.getRegistration(token);
        // if (registration) {
        //     return registration.provider.
        // }
        return this.construct(<constructor<T>> token);
    }

    private construct<T>(ctor: constructor<T>): T {
        if (ctor.length === 0) {
          return new ctor();
        }
    
        const paramInfo = typeInfo.get(ctor);
    
        if (!paramInfo || paramInfo.length === 0) {
          throw `TypeInfo not known for ${ctor}`;
        }
    
        const params = paramInfo.map(param => this.resolve(param));
    
        return new ctor(...params);
    }

    isRegistered<T>(token: InjectionToken<T>): boolean {
        return this._registry.has(token);
    }

    private getRegistration<T>(token: InjectionToken<T>): Registration | null {
        if (this.isRegistered(token)) {
          return this._registry.get(token)!;
        }
    
        if (this.parent) {
          return this.parent.getRegistration(token);
        }
    
        return null;
      }

}

export const typeInfo = new Map<constructor<any>, any[]>();

export const instance: Types.Container = new Container();