import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverContrl: PopoverController) {}

  public async getReviewInfo(event) {
    event.preventDefault();
    event.stopPropagation();
    const popOverCtrol = await this.popoverContrl.create({
      backdropDismiss: true,
      event,
      component: PopoverComponent,
      componentProps: {
        popOverText: 'Message for Popover'
      }
    });
    return popOverCtrol.present();
  }

}
