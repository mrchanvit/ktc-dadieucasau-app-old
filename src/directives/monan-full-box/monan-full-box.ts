import { Directive } from '@angular/core';

/**
 * Generated class for the MonanFullBoxDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[monan-full-box]' // Attribute selector
})
export class MonanFullBoxDirective {

  constructor() {
    console.log('Hello MonanFullBoxDirective Directive');
  }

}
