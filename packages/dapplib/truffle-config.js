require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy crawl night equip gloom praise army gas'; 
let testAccounts = [
"0x9e728758b007026e57dadef58b948e9b73e421d5f8f9b423af3bf137fce904c0",
"0xba9feac18a5d8c39da19d48e5a3515f4c10208460be819add85b019258299137",
"0xd044c94dd6ffb0db6b8e1a04d0df71ca5f161940e445e25ad3901281a465234b",
"0x91e082fc3ee04f5d9768048744a9570c27bfbde72e57356aa47176acfb7f5132",
"0xe7c7818d7a07b87e763af16c411639f61cf58e390ed9d520c08db341035d6a2f",
"0xc4eab8822a453bae4ed875eefbf413c18c59a43ec928c77579be3b2c6fb83558",
"0xf9a45020d3c0035c36c9852cb2fae6431008dd555d6335dd7852d01c3a8d3593",
"0xfb99a5f3d12c23912283320698824205b31b501c2a529c23f5203ec14ad6d194",
"0x8fae894824181246d56ab042f189d5025a08766ec765c590f8cf81e3097f630b",
"0xc420ae1e77ecd33f102b537950b10c5cbc39d47f91e9e545d9befd215f2f043c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


