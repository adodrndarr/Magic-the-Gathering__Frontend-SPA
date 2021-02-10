import { Component } from '@angular/core';


@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="loading__container">
      <h2>Calculating distances between stars...</h2>
      <div class="lds-circle"><div>
      </div></div>
    </div>`
})
export class LoadingSpinnerComponent {
}
