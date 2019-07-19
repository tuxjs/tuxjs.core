import { inject, injectable, Container } from './index';
import 'reflect-metadata';

export interface Animal {
    _name: string;
    getName(): string;
}

@injectable()
export class Dog implements Animal {
    _name: string;

    constructor() {
        this._name = "Wofl";
    }

    getName(): string {
        return this._name;
    }

}

@injectable()
export class Meow implements Animal {
    _name: string;

    constructor() {
        this._name = "Meow";
    }

    getName(): string {
        return this._name;
    }

}

@injectable()
export class CollectionPet {

    private _dog: Dog;
    private _meow: Meow;

    constructor(
        @inject(Dog) dog: Dog,
        @inject(Meow) meow: Meow
    ) {
        this._dog = dog;
        this._meow = meow;
    }

    getDogName() {
        return this._dog.getName();
    }

    getMeowName() {
        return this._meow.getName();
    }
}

let collectionPet = Container.resolve(CollectionPet);

console.log(collectionPet.getDogName());
console.log(collectionPet.getMeowName());
