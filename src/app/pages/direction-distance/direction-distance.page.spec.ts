import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectionDistancePage } from './direction-distance.page';

describe('DirectionDistancePage', () => {
  let component: DirectionDistancePage;
  let fixture: ComponentFixture<DirectionDistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionDistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionDistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
