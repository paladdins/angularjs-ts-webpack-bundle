import { Directive } from 'angular-ts-decorators';

// this directive removes img element if its src not found
@Directive({
    selector: 'check-src',
    link: (scope, element, attrs) => {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
              element.remove()
          }
        });
        attrs.$observe('ngSrc', function(value) {
          if (!value && attrs.errSrc) {
              element.remove()
          }
        });
    }
})

export class srcCheckDirecitive {}