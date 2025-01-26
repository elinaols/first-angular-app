import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsInfoComponent } from './restaurants-info.component';

describe('RestaurantsInfoComponent', () => {
  let component: RestaurantsInfoComponent;
  let fixture: ComponentFixture<RestaurantsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
