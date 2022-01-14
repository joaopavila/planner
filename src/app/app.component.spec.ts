import { TestBed } from '@angular/core/testing';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ColumnComponent],
      imports: [
        NbEvaIconsModule,
        NbIconModule,
        NbThemeModule.forRoot(),
        NbCardModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
