const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('ed20c6626e4b4b8e81bc5ae10f93730687dad9a53bad8d186dda5e3097574203');


const myWalletAddress = myKey.getPublic('hex');


const Pintem = new Blockchain();


Pintem.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
Pintem.addTransaction(tx1);


Pintem.minePendingTransactions(myWalletAddress);


const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
Pintem.addTransaction(tx2);

Pintem.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Your balance is ${Pintem.getBalanceOfAddress(myWalletAddress)} PintemCoins`);


console.log();
console.log('Blockchain valid?', Pintem.isChainValid() ? 'Yes' : 'No');

console.log(JSON.stringify(Pintem, null, 4))

