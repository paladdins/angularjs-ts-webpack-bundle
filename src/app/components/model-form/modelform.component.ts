import { Component, Input } from 'angular-ts-decorators';

// get styles
import './modelform.component.scss'

// get template
const template = require('./modelform.component.html');

@Component({
  selector: 'model-form',
  template
})
export class ModelForm {

  @Input('=') phone: string;
  @Input('=') email: string;

  public selectedIndex: number;

  // Injecting static
  static $inject = ["$location", "$anchorScroll"];
  
  constructor(private $location: ng.ILocationService, 
    private $anchorScroll: ng.IAnchorScrollService) {
  }

  onSubmit($event: any) {

    // getting the second invalid element (the first one is <form>)
    let invalidEl = document.getElementsByClassName('ng-invalid')[1]

    if(invalidEl) { // if invalid exists
      
      // getting its id
      let invalidId = invalidEl.id; 
      
      // using experimental .closest(), which won't work in the latest IE (Edge works) and Opera Mini
      let neededTabId = (<HTMLDivElement>invalidEl.closest('md-tab-content')).id

      // setting tab 
      this.selectedIndex = Number(neededTabId.split('-')[2]);
      
      // scrolling to the element
      this.$location.hash(invalidId);
      this.$anchorScroll();
      
    }
    else { // if everything is valid

      // logging form fields
      console.log({
        "phone": this.phone,
        "email": this.email
      })
    }
  }
}