import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHumanizeLang'
})

export class AppHumanizeLangPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'ru': return 'Русский'
      case 'en': return 'Английский'
      default: return  'Неизвестный язык'
    }
  }
}
