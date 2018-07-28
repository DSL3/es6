//const Message = require('./message.model');

//class ImageMessage extends Message {


//importar mais 
//import { default as Message, a,b,c} from './message.model';

//lodash
// import * as _ 'lodash';
// _.map();
// _.reduce();


//import { default as Message} from './message.model';
import Message from './message.model';


export default class ImageMessage extends Message {}
  constructor(text = '', created = Date.now(),
    url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  /**
   * Method overriden
   * @returns String
   */
  toString() {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
module.exports = ImageMessage;
