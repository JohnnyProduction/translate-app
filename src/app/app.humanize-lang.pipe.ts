import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHumanizeLang'
})

export class AppHumanizeLangPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'ru': return 'Русский';
      case 'en': return 'Английский';
      case 'fr': return 'Французский';
      case 'de': return 'Немецкий';
      case 'es': return 'Испанский';
      default: return  'Неизвестный язык'
    }
  }
}
