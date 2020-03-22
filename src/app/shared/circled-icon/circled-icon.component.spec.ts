import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircledIconComponent } from './circled-icon.component';

describe('CircledIconComponent', () => {
  let component: CircledIconComponent;
  let fixture: ComponentFixture<CircledIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircledIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircledIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
