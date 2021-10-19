require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strong riot situate comfort install kitten bubble skull'; 
let testAccounts = [
"0xd888f29fafd7df17b039a71fe914f6753a837ddad874f222fe35e5a57e3c87e6",
"0x3cc2720ee7d3fc42c5960b6e9b665e834b67531f99104637d9a1f847a4747e94",
"0xb619f3a2f39687952ac10647c0b7ae2e100064d87732d3eee16af9de92d566fa",
"0xcbfe2b599aa9aa91dda8e0cb7fcbc74296e55464895b6bb6736bd560ca9b00a5",
"0x82b4355240b18d46141a21f93dbc2d79222bac7ce993fe5b0fb916a344181ea9",
"0x99643259762bdbd1d263899674ed8791c1d69dc229b472cb6acef9a76f68a425",
"0x36700d226c6eceff8469e602b15ba7fb84421d9adf6e84d55b8f224fce5006ae",
"0x1c194ceb465a5f7c6c26ef9efc169b83e3b143199cde57e6457826022d01cb82",
"0x7f8de68906e7758f167e501e24ff952ecf6a336023a8d3170370bc96c15ca3c4",
"0x9505dfd76fef05f714b0d005cba0b756822370e749de4ffe4e45f33c827d7ee4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

