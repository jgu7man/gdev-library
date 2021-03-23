import { Injectable } from '@angular/core';
import { GdevSidenavNode } from './gdev-sidenav.interface';

@Injectable({
  providedIn: 'root'
})
export class GdevSidenavService {

  structure: GdevSidenavNode[] = []
  constructor () { }

}
