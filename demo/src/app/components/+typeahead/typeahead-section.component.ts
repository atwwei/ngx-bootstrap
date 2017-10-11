import { Component } from '@angular/core';

import { DEMOS } from './demos';
import { ComponentExample } from '../../common/models/components-examples.model';
import { ComponentApi } from '../../common/models/components-api.model';
/*import { typeaheadExamples, typeaheadApi } from './typeahead-section.list';*/

// webpack html imports
let titleDoc = require('html-loader!markdown-loader!./docs/title.md');

@Component({
  selector: 'typeahead-section',
  templateUrl: './typeahead-section.component.html'
})
export class TypeaheadSectionComponent {
  name: string = 'Typeahead';
  src: string = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/typeahead';
  demos: any = DEMOS;
  titleDoc: string = titleDoc;
  /*typeaheadExamples: ComponentExample[] = typeaheadExamples;
  typeaheadApi: ComponentApi[] = typeaheadApi;*/
}
