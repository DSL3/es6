import moment from 'moment';
import Message from './model/message.model';
import { messageFactory } from './utils';

import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

const template: any = require('./messages.html');
const logo: any = require('./images/especializa_logo.jpg');

console.log('Index started again');

(<HTMLBodyElement> document.body).onload = () => {
  (<HTMLInputElement> document.getElementById('message'))
  .value = '/giphy hello';

  (<HTMLButtonElement> document.getElementById('send')).click();
};


  (<HTMLButtonElement> document.getElementById('send')).onclick = () => {
    messageFactory((<HTMLInputElement> document.getElementById('message')).value)
    .then((m: Message) => {
        (<HTMLElement> document.getElementById('messages')).innerHTML += 
        template({
          m,
          relativeTime: moment(m.created).fromNow(),
        });
    }); 
  };
  
  (<HTMLImageElement> document.getElementById('logo')).src = logo;
  
  if (module && module.hot) {
    module.hot.accept();
  }


// const Message = function(text) {
//   this.text = text;
//   this.created = Date.now();
// };

// (<HTMLButtonElement> document.getElementById('send')).onclick = () => {
//   const m = new Message(
//     (<HTMLInputElement> document.getElementById('message')).value,
//   );
//   (<HTMLElement> document.getElementById('messages')).innerHTML += template({
//     m,
//     relativeTime: moment(m.created).fromNow(),
//   });
// };

