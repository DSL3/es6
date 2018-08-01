export default class Message {
  public static newEmptyMessage(): Message {
    return new Message();
  }
  // tslint:disable-next-line:variable-name
  // private _created: number;
  // public text?: string;
  // protected readonly created: number;

  constructor(public text: string = '',
              protected created: number = Date.now()) {
    // this.text = text;
    // this.created = created;
  }

  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
  // get created(): number {
  //   return this._created;
  // }
  // set created(created: number) {
  //   // if (typeof created === 'undefined' || isNaN(created)) {
  //   //   throw new Error('Invalid created');
  //   // }
  //   // if (Message.hasOwnProperty.call(this, '_created')) {
  //   if (this._created) {
  //      throw new Error('Created already defined');
  //   }
  //   this._created = created;
  // }
}
