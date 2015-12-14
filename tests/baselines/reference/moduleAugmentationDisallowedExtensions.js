//// [tests/cases/compiler/moduleAugmentationDisallowedExtensions.ts] ////

//// [x.ts]

declare module "./observable" {
    var x: number;
}
export {}

//// [observable.ts]
export declare class Observable<T> {
    filter(pred: (e:T) => boolean): Observable<T>;
}
export var x = 1;

//// [main.ts]
import { Observable } from "./observable"
import "./x";


//// [x.js]
"use strict";
//// [observable.js]
"use strict";
exports.x = 1;
//// [main.js]
"use strict";
require("./x");
