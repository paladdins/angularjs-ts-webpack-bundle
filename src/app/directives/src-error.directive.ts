import { Directive } from 'angular-ts-decorators';

// This directive uses another src if the main not found
@Directive({
    selector: 'err-src',
    link: (scope, element, attrs) => {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
        attrs.$observe('ngSrc', function(value) {
          if (!value && attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
    }
})

export class srcErrDirecitive {}