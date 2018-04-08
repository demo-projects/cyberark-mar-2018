import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { set, update } from 'lodash/fp';
import * as deepFreeze from 'deep-freeze';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

const state = {
  editor: {
    elements: [
      { tag: 'h1', text: 'element1', opacity: 0.4 },
      { tag: 'h2', text: 'element2', opacity: 0.7 }
    ]
  }
};
deepFreeze(state);
console.log('state=', state);
const state2 = set(['editor', 'elements', 1, 'text'], 'new element2', state);
deepFreeze(state2);
console.log('state2=', state2);

const concat = item => arr => [...arr, item];

const state3 = update(
  ['editor', 'elements'],
  concat({ tag: 'h3', text: 'element3' }),
  state2
);
deepFreeze(state3);
console.log('state3=', state3);

const invert = num => 1 - num;

// invert opacity of first element
const state4 = update(['editor', 'elements', 1, 'opacity'], invert, state3);
deepFreeze(state4);
console.log('state4=', state4);

// UGLY ES6 CODE:
// const state2 = {
//   ...state,
//   editor: {
//     ...state.editor,
//     elements: state.editor.elements.map((item, index) => {
//       if (index === 1) {
//         return {
//           ...item,
//           text: 'new element2'
//         };
//       } else {
//         return item;
//       }
//     })
//   }
// };
// WRONG!!!!! DO NOT MUTATE THE STATE! state.editor.elements[1].text = 'new element2';
