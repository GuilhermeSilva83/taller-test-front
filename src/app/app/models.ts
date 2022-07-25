export class OperationResult<TData> {
    data?: TData;
    success: boolean = false;
    message: string = '';

    constructor() {

    }
}

export interface IEntity {
    id: any;
}

export class Entity {
    id : number = 0;
    name : string = '';
    constructor() {}
}

export class Car extends Entity
 {
    color = ''
    make = null;

    constructor() {
        super();
    }
}

export class Make extends Entity
 {
    cars : Car[] = []
    constructor() {
        super();
    }
}