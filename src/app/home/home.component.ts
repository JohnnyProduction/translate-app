import { Component, OnInit } from "@angular/core";
import { TranslationEntity, TranslationRepository } from "../services/translation.repository";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public translations: TranslationEntity[] = [];
  constructor(public translationRepository: TranslationRepository) {
  }

  ngOnInit(): void {
      this.translations = this.translationRepository.getAll();
  }

  clearHistory() {
    this.translationRepository.clear();
    this.translations = this.translationRepository.getAll();
  }
}
