import { writeFile } from 'fs';

var allEmojis = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

function createPrivateKeyAndTable(private_key, plain_text) {
    var privateTable = createPrivateTable();
    var batchSize = privateTable.length;
    var encryptedValue = '';
    for (var i = 0; i < plain_text.length; i++) {
        var positionOfEmoji = (private_key.charCodeAt(i) + plain_text.charCodeAt(i)) % 26;
        var positionOfBatch = i % batchSize;
        encryptedValue += privateTable[positionOfBatch][positionOfEmoji];
    }
    createAndUpdateTxtFile(JSON.stringify(privateTable));
    console.log(encryptedValue);
    return 'salam';
}

function createPrivateTable() {
    var privateTable = [];
    var batchSize = Math.round(Math.random() * 6) + 1;
    for (var i = 0; i < batchSize; i++) {
        privateTable.push([...allEmojisShuffle()]);
    }
    return privateTable;
}

function createAndUpdateTxtFile(data) {
    writeFile('private_table', data, err => {
        console.log(err);
    });
}

function allEmojisShuffle() {
    for (var i = 1; i < allEmojis.length; i++) {
        for (var j = 0; j < i; j++) {
            var newPosition = Math.floor(Math.random() * j);
            var tempVal = allEmojis[j];
            allEmojis[j] = allEmojis[newPosition];
            allEmojis[newPosition] = tempVal;
        }
    }
    return allEmojis;
}
