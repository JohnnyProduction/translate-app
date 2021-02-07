import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from  './material.module';
import { GoogletranslateService } from "./services/googletranslate.service";
import { TranslationRepository } from "./services/translation.repository";
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { TranslationInputComponent } from "./translation-input/translation-input.component";
import { TranslationOutputComponent } from "./translation-output/translation-output.component";
import { HistoryListComponent } from './home/history-list/history-list.component';
import { AppHumanizeLangPipe } from "./app.humanize-lang.pipe";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'translation-input', component: TranslationInputComponent },
  { path: 'translation-output/:id', component: TranslationOutputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslationInputComponent,
    TranslationOutputComponent,
    HistoryListComponent,
    AppHumanizeLangPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GoogletranslateService, TranslationRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
