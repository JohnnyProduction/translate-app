import { Component, Input } from '@angular/core';
import { TranslationEntity } from "../../services/translation.repository";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent{
  @Input() translation: TranslationEntity;
}
