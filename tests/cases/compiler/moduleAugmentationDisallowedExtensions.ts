// @module: commonjs

// @filename: x.ts
declare module "./observable" {
    var x: number;
}
export {}

// @filename: observable.ts
export declare class Observable<T> {
    filter(pred: (e:T) => boolean): Observable<T>;
}
export var x = 1;

// @filename: main.ts
import { Observable } from "./observable"
import "./x";
