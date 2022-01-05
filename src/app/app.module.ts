import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [AppComponent, ColumnComponent],
  imports: [
    BrowserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule.forRoot(),
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
