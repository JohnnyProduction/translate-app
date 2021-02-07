import { Component, OnInit } from "@angular/core";
import { TranslationEntity, TranslationRepository } from "../services/translation.repository";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-translation-output',
  templateUrl: './translation-output.component.html',
  styleUrls: ['./translation-output.component.scss']
})

export class TranslationOutputComponent implements OnInit {

  public translationEntity: TranslationEntity | undefined

  constructor(public translationRepository: TranslationRepository, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.translationEntity = this.translationRepository.getById(id);
  }
}
