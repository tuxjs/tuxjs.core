import { injectable, inject } from "./decorators";
import * as container from './container';

let Container = container.instance;

export { injectable, inject, Container }