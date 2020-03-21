import { Component } from '@angular/core';
import {NewRequestModalComponent} from './new-request-modal/new-request-modal.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewRequestModalComponent
    });
    return await modal.present();
  }

}
