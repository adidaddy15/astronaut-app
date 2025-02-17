import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastName',
  standalone: true,
})
export class LastNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ')[1];
  }
}
