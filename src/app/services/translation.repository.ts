import { Injectable } from '@angular/core';
import * as shortid from 'shortid';


@Injectable({
  providedIn: 'root'
})
export class TranslationRepository {

  public getAll(): TranslationEntity[] {
    this.initLocaleStorageIfNeed();
    return JSON.parse(localStorage.getItem('translation')).map(TranslationEntity.fromDTO);
  }

  public getById(id: string): TranslationEntity | undefined {
    return this.getAll().find(translation => translation.id === id)
  }

  public add(transactionEntity: TranslationEntity) {
    this.initLocaleStorageIfNeed();
    const all = this.getAll();
    all.push(transactionEntity);
    localStorage.setItem('translation', JSON.stringify(all.map(x => x.toDTO())));
  }


  private initLocaleStorageIfNeed() {
    if (!localStorage.getItem('translation')) {
      localStorage.setItem('translation', JSON.stringify([]))
    }
  }

}

export type TranslationDTO = {
  sourceLanguage: string,
  targetLanguage: string,
  sourceText: string,
  targetText: string,
  id: string,
}

export class TranslationEntity {

  public readonly id: string;

  constructor(
    public sourceLanguage: string,
    public targetLanguage: string,
    public sourceText: string,
    public targetText: string,
    id?: string,
  ) {
    this.id = id || shortid();
  }

  public toDTO(): TranslationDTO {
    return {
      sourceLanguage: this.sourceLanguage,
      targetLanguage: this.targetLanguage,
      sourceText: this.sourceText,
      targetText: this.targetText,
      id: this.id,
    }
  }

  public static fromDTO(dto: TranslationDTO): TranslationEntity {
    const { sourceLanguage, targetLanguage, sourceText, targetText, id } = dto;
    return new TranslationEntity(sourceLanguage, targetLanguage, sourceText, targetText, id)
  }
}

