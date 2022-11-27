export class MenuManager {
    private _id : number
    private _dishName: string;
    private _price: number;
    private _type: string;
    private _describe: string;
    private _amount: number;

    constructor(id: number, dishName: string, price: number, type: string, describe: string, amount: number) {
        this._id = id;
        this._dishName = dishName;
        this._price = price;
        this._type = type;
        this._describe = describe;
        this._amount = amount;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get dishName(): string {
        return this._dishName;
    }

    set dishName(value: string) {
        this._dishName = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}