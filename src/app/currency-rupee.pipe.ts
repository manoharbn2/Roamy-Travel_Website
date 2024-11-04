import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRupee',
  standalone: true
})
export class CurrencyRupeePipe implements PipeTransform {

  transform(value: number): string {
    return '₹' + value.toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }

}
