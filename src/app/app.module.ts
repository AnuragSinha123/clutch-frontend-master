import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HomepageServiceComponent } from './homepage-service/homepage-service.component';
import { DevelopmentServiceComponent } from './development-service/development-service.component';
import { JoinServiceComponent } from './join-service/join-service.component';
import { ProfileServiceComponent } from './profile-service/profile-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewsComponent,
    CompanyListingComponent,
    ReviewsComponent,
    SearchBarComponent,
    MainContentComponent,
    FooterComponent,
    BannerComponent,
    HomepageServiceComponent,
    DevelopmentServiceComponent,
    JoinServiceComponent,
    ProfileServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
