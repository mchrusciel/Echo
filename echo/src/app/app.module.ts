import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntriesComponent } from './entries/entries.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    EntriesComponent,
    StripHtmlTagsPipe
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
