import { Component } from "@angular/core";
import { GoogletranslateObj, GoogletranslateService } from "../services/googletranslate.service";
import { TranslationEntity, TranslationRepository } from "../services/translation.repository";
import { Router } from "@angular/router";

@Component({
  selector: 'app-translation-input',
  templateUrl: './translation-input.component.html',
  styleUrls: ['./translation-input.component.scss'],
})

export class TranslationInputComponent {
  sourceText: string;
  sourceLang: string;
  targetLang: string;

  constructor(private googleTranstaleService: GoogletranslateService, private translationRepository: TranslationRepository, private router: Router) {
  }

  send() {
    const googleObj: GoogletranslateObj = {
      q: this.sourceText,
      target: this.targetLang,
      source: this.sourceLang,
    };

    this.googleTranstaleService.translate(googleObj).subscribe((res: any) => {
      const targetText = res.data.translations[0].translatedText;
      const transactionEntity = new TranslationEntity(this.sourceLang, this.targetLang, this.sourceText, targetText);
      this.translationRepository.add(transactionEntity);
      this.router.navigate(['/translation-output', transactionEntity.id]);
    });
  }
}
