import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSearchComponent } from '@shared/ui';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputSearchComponent],
    });
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
