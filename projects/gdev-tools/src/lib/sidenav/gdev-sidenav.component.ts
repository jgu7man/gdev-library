import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { GdevSidenavNode } from './gdev-sidenav.interface';
import { Location } from '@angular/common';
import { GdevSidenavService } from './gdev-sidenav.service';


@Component({
  selector: 'gdev-sidenav',
  templateUrl: './gdev-sidenav.component.html',
  styleUrls: ['./gdev-sidenav.component.scss']
})
export class GdevSidenavComponent implements  AfterViewInit {

  @Input() structure: GdevSidenavNode[] = []

  constructor (
    public location: Location,
    public _sidenav: GdevSidenavService
  ) { }

  ngAfterViewInit() {
    if (this.structure.length == 0) {
      this.structure = this._sidenav.structure.length > 0
        ? this._sidenav.structure : this.structure
    }
  }

  enableChilds(list:GdevSidenavNode[]):GdevSidenavNode[] {
    return list.filter(i => !i.disable)
  }


  onActive( path: string | string[] ) {
    if ( typeof path === 'string' ) {
      return this.location.path().includes( path )
    } else {
      let finded: boolean = false
      path.forEach( id => {
        if ( this.location.path().includes( id ) )
          finded = true
      })
      return finded
    }
  }



}
