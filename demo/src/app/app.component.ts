import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryBuilderModule } from '@grollmus/ng-query-builder';

@Component({
  standalone: true,
  imports: [ RouterModule, QueryBuilderModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
