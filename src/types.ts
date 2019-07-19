import { InjectionToken, ValueProvider, FactoryProvider, TokenProvider, ClassProvider } from "./providers";

/** Constructor type */
export type constructor<T> = { new(...args: any[]): T };

export type Dictionary<T> = { [key: string]: T };

export type RegistrationOptions = {
  singleton: boolean;
};

export interface Container {
  // register<T>(token: InjectionToken<T>, provider: ValueProvider<T>): Container;
  // register<T>(token: InjectionToken<T>, provider: FactoryProvider<T>): Container;
  // register<T>(token: InjectionToken<T>, provider: TokenProvider<T>, options?: RegistrationOptions): Container;
  register<T>(token: InjectionToken<T>, provider: ClassProvider<T>, options?: RegistrationOptions): Container;

  // registerSingleton<T>(from: InjectionToken<T>, to: InjectionToken<T>): Container;
  // registerSingleton<T>(token: constructor<T>): Container;

  registerType<T>(from: InjectionToken<T>, to: InjectionToken<T>): Container;
  registerInstance<T>(token: InjectionToken<T>, instance: T): Container;
  resolve<T>(token: InjectionToken<T>): T;
  isRegistered<T>(token: InjectionToken<T>): boolean;
  // reset(): void;
  // createChildContainer(): Container;
}
