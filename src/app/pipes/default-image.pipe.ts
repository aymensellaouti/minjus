import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_PATH = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (!path.trim().length) {
      return DEFAULT_PATH;
    } else {
      return path;
    }
  }

}
