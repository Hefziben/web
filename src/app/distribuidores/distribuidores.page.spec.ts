import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistribuidoresPage } from './distribuidores.page';

describe('DistribuidoresPage', () => {
  let component: DistribuidoresPage;
  let fixture: ComponentFixture<DistribuidoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistribuidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
