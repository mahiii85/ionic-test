import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SampleAlertComponent } from './sample-alert.component';

describe('SampleAlertComponent', () => {
  let component: SampleAlertComponent;
  let fixture: ComponentFixture<SampleAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleAlertComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SampleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
