import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { ColumnComponent } from './column.component';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnComponent],
      imports: [
        NbEvaIconsModule,
        NbIconModule,
        NbThemeModule.forRoot(),
        NbCardModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
