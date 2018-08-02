
// interface Model {
//   text: string;
//   created: number;
//   save(): void;
//   delete(): void;
// }

// export class Message implements Model {
 //export class Message {
 export abstract class Message {
  // public static newEmptyMessage(): Message {
  //   return new Message();
  // }

  constructor(public text: string = '',
              public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
  // public save(): void {
  //   console.log('save');
  // }
  // public delete(): void {
  //   console.log('delete');
  // }

}
