var bitcoin = require('bitcoinjs-lib');
var network = bitcoin.networks.testnet;
var blockCypherTestnetApiEndpoint=
'https://api.blockcypher.com/v1/btc/test3/';

var getKeys = function () {
    var aliceKeys = bitcoin.ECPair.makeRandom({
        network: network
    });
    var bobKeys = bitcoin.ECPair.makeRandom({
        network: network
    });
    var alicePublic = aliceKeys.getAddress();
    var alicePrivate = aliceKeys.toWIF();
    var bobPublic = bobKeys.getAddress();
    var bobPrivate = bobKeys.toWIF();
    console.log(alicePublic, alicePrivate, bobPublic, bobPrivate);
};
getKeys();

var request = require('request');
var getOutputs = function () {
    var url = blockCypherTestnetApiEndpoin + 'addrs/' +
        'mvBbmN5f9oX99v288kePeNgBDD4SYjvm5s' + '?unspentOnly=true';
    return new Promise(function (resolve, reject) {
        request.get(url, function (err, res, body) {
            if (err) {
                reject(err);
            }
            resolve(body);
        });
    });
};

getOutputs().then(result => {
    console.log(result)
}).catch(error => {
    console.error(error)
})