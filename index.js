const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');


const emptyMessage = new Message();
const emptyPhotoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyPhotoMessage);

class MessagesService {
    constructor() {         
        let resolvePromise;
        let rejectPromise;
        const filePath = path.join(__dirname, 'messages.json');

        this.messagesPromise = new Promise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });     
        fs.readFile(filePath, { enconding: 'utf-8' }, function(err, data) {
            if(err) {
                rejectPromise(err);
            } else {
                const dataArray = JSON.parse(data);
                const dataObj = dataArray.map((item) => {
                    return new Message(item.text, item.created);
                });
                resolvePromise(dataObj);
            }
        });   
    }
    get messages() {
        return this.messagesPromise;
    }
}


const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
    
    console.log(messages);

    for (let x = 0; x < messages.length; x++) {
        console.log(String(messages[x]));        
    }
}).catch((err) => {
    console.log(err);
});


let a = 10;

function add(number) {
    //escopo de bloco com const e let o valor do console vai ser sempre 10
    // mesmo com escopo de bloco o uso do var é global, por isso vamos ter o valor de 21
    {
        const a = number + 1;
    }
    return a;
}

console.log(add(20));
console.log(a);