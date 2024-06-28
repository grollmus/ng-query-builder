import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QueryBuilderModule } from '@grollmus/ng-query-builder';
import { QueryBuilderConfig } from 'ng-query-builder-package/src/lib/query-builder/query-builder.interfaces';

@Component({
  standalone: true,
  imports: [ RouterModule, QueryBuilderModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', value: 'Bob'},
      {field: 'gender', operator: '>=', value: 'm'}
    ]
  };
  
  config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      }
    }
  }
}
