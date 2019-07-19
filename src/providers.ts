import {constructor} from "./types";
import { Container } from "./container";

export type InjectionToken<T = any> = constructor<T> | string | symbol;

export interface ClassProvider<T> {
  useClass: constructor<T>;
}

export interface ValueProvider<T> {
  useValue: T;
}

export interface TokenProvider<T> {
  useToken: InjectionToken<T>;
}

export interface FactoryProvider<T> {
  useFactory: (dependencyContainer: Container) => T;
}

export type Provider<T> = ClassProvider<T> | ValueProvider<T> | TokenProvider<T> | FactoryProvider<T>;

export function isNormalToken(token?: InjectionToken<any>): token is string | symbol {
  return typeof token === "string" || typeof token === "symbol";
}