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
    color = '';
    doors = 0;
    year = 0;
    make = null;
    makeId = 0;
    price = 0;

    constructor() {
        super();
    }
}

export class  Tuple<T>  {
    value : T
    constructor(value : T) {
        this.value = value
    }
}


export class Make extends Entity
 {
    cars : Car[] = []
    constructor() {
        super();
    }
}