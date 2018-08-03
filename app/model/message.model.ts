// const test: Function = (data: any) => {
//   console.log(data);
//   return (target: Function) => {
//     console.log(target);
//   };
// };
// const deprecated: ClassDecorator = (target: Function) => {
//   console.log('This has been deprecated');
// };

// @test({ foo: 'bar' }) @deprecated
interface IDeprecatedMetaData {
  reason: string;
  replacement: string;
}
const Deprecated: Function = (data: IDeprecatedMetaData) => {
  return (target: Function, propertKey?: string) => {
    console.warn(`${propertKey || 'This class'} has been deprecated, ` +
                `Reason ${data.reason}\n` +
                `You should use ${data.replacement} instead`);
  };
};

@Deprecated({
  reason: 'IDK',
  replacement: 'OtherMessageClass',
})
export class Message {
  @Deprecated({
    reason: 'useless method',
    replacement: 'normal constructor',
  })
  public static newEmptyMessage(): Message {
    return new Message();
  }

  constructor(public text: string = '',
              public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
