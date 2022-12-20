import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AboutSectionComponent } from './components/main/components/about-section/about-section.component';
import { FeaturesSectionComponent } from './components/main/components/features-section/features-section.component';
import { ToursSectionComponent } from './components/main/components/tours-section/tours-section.component';
import { StoriesSectionComponent } from './components/main/components/stories-section/stories-section.component';
import { FormComponent } from './components/form/form.component';
import { BookingSectionComponent } from './components/main/components/booking-section/booking-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    ToursSectionComponent,
    StoriesSectionComponent,
    FormComponent,
    BookingSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
