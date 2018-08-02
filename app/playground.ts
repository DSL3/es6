// import { ImageMessage } from './model';
// import { Message } from './model';
import { ImageMessage } from './model/image-message.model';
import { Message } from './model/message.model';


export namespace questions {
   export interface Question {
        title: string;
        created: number;
    }
    export const q: Question = { title: 'My Question', created: Date.now() };
}

// const myUnion: string | number | boolean | Message =new ImageMessage ();

// união ou iterseção
type  myUnionType = string | number | boolean | Message;



type myUnionType2 = Message | questions.Question;
type myIntersecType = Message & questions.Question;

// const x: myUnionType2 = q;

const y: myIntersecType = { title: 'My Title', text: 'My text', created: 0 };

type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

const s1: Size = 'LARGE'; // 'xLARGE';

enum EnumSize {
    SMALL = <any> 'SMALL',
    MEDIUM = 15,
    LARGE = 20,
}

const s2: EnumSize = EnumSize.LARGE;
const s3: number =  s2;

// const m: Message = { text: '', created: 10 };
// let s1: Set<Message> = new Message();
// let s2: Set<ImageMessage> = new ImageMessage();

// s1 = s2;
// s1.add( new Message());
// s2.add( new ImageMessage());

// s2 = s1;
