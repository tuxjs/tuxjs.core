import { constructor } from "./types";
import { typeInfo } from "./container";
import { getParamInfo, INJECTION_TOKEN_METADATA_KEY } from "./reflection-helpers";
import { InjectionToken } from "./providers";

export function injectable<T>(): (target: constructor<T>) => void {
    return function(target: constructor<T>): void {
        typeInfo.set(target, getParamInfo(target));
    }
}

export function inject(token: InjectionToken<any>) : ( target: any, propertyKey: string | symbol, parameterIndex: number) => any {
    return function(target: any, _propertyKey: string | symbol, parameterIndex: number) : any {
        const injectionToken = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
        injectionToken[parameterIndex] = token;
        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, injectionToken, target);
    };
}