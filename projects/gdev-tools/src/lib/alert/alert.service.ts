import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { ErrorAlertModel, GdevMessageAlertModel } from './alerts.model';
import { MatDialog } from '@angular/material/dialog';
import { AlertaPopupComponent } from './alerta-popup/alerta-popup.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })
export class GdevAlert {

    messageAlert$ = new Subject<GdevMessageAlertModel>()
    requestAlert$ = new Subject<GdevMessageAlertModel>()
    errorAlert$ = new Subject<ErrorAlertModel>()
    responseAlert$ = new Subject<boolean>()



    constructor (
        private dialog: MatDialog,
        private snack: MatSnackBar,
        private fs: AngularFirestore
    ) { }

    // Función que envía un mensaje de alerta
    // y espera la confirmación de la lectura del usuario
    sendMessageAlert(message: GdevMessageAlertModel | string, format?: 'text' | 'html'): Observable<any> {
        if (!format) format = 'text';
        console.log( format )
        var msgModel: GdevMessageAlertModel =
            typeof message != 'string' ?  message :
                new GdevMessageAlertModel( message, 'mensaje', format )

        if (!msgModel.trueMsg) msgModel.trueMsg = 'Aceptar'

        this.dialog.open( AlertaPopupComponent, {
            minWidth: '450px',
            data: msgModel,
            role:'alertdialog'
        })

        return this.responseAlert$
    }


    // Función que envía una pregunta como alerta
    // y espera la respuesta true o false del usuario
    sendRequestAlert({ message, trueMsg, falseMsg}: GdevMessageAlertModel ): Observable<boolean> {

        if (!trueMsg) trueMsg = 'Aceptar'
        if ( !falseMsg ) falseMsg = 'Cancelar'

        let request: GdevMessageAlertModel = {
            message, trueMsg, falseMsg, type: 'pregunta'
        }

        var dialog = this.dialog.open( AlertaPopupComponent, {
            minWidth: '450px',
            data: request,
            role: 'alertdialog',
            disableClose: true
        } )

        return dialog.afterClosed()
    }




    sendFloatNotification(
        notification: string,
        confirmText?: string,
        duration?: number,
        vPosition?: 'top' | 'bottom' ,
        hPosition?: 'start' | 'center' | 'end' | 'left' | 'right'
    ) {

        confirmText = confirmText ? confirmText : 'ok';
        let config: MatSnackBarConfig = {
            duration: duration ? duration : 30000,
            verticalPosition: vPosition ? vPosition : 'bottom',
            horizontalPosition: hPosition ? hPosition : 'right',
            panelClass:['snackBar']
        }

        this.snack.open( notification, confirmText, config)
    }


    sendError( mensaje: string, error: string ) {
        const alert = new ErrorAlertModel( mensaje, error )
        this.fs.collection(`_admin/_main/errors`).add({error, mensaje})
        this.dialog.open( ErrorPopupComponent, {
            width: '400px',
            data: alert
        } )
    }




}
