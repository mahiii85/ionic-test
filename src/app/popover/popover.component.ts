import { Component, OnInit, TemplateRef } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  popOverText: string;
  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.popOverText = this.navParams.get('popOverText');
  }

}
