import { Component,  Inject,  Input,  OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GdevAuth } from '../../auth.service';
import { GdevRestorePasswordLabels } from '../../models/labels.model';

@Component({
  templateUrl: './restore-password.dialog.html',
  styleUrls: ['./restore-password.dialog.scss']
})
export class RestorePasswordDialog implements OnInit {

  emailAccount: string = ''


  constructor(
    @Inject(MAT_DIALOG_DATA) public labels: GdevRestorePasswordLabels,
    public dialog: MatDialogRef<RestorePasswordDialog>,
    public loginS: GdevAuth
  ) { }

  ngOnInit(): void {
  }

}


