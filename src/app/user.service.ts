// import { Injectable, EventEmitter } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   activatedEmitter = new EventEmitter<boolean>();

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activatedEmitter = new Subject<boolean>(); // Subject is good for actively triggering from code

  constructor() { }
}
