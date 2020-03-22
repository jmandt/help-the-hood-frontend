import {Injectable} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CoreService {
    constructor(private toastCtrl: ToastController,
                private modalCtrl: ModalController) {
    }

    async showToast(msg, color) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom',
            color
        });

        toast.present();
    }

    async showToastWithButton(msg, color) {
        const toast = await this.toastCtrl.create({
            message: msg,
            position: 'top',
            color,
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        toast.present();
    }


    async openModal(componentName, cssClass, componentProps?) {
        const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
                component: componentName,
                componentProps,
                cssClass,
            });

        await modal.present();
    }

    async dismissModal() {
        await this.modalCtrl.dismiss();
    }

}
