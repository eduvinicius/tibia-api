import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hasComment',
    standalone: true
})
export class HasCommentPipe implements PipeTransform {

  transform(comment: string): string  {
    return comment ? comment : comment = 'Não há comentário'
  }

}
