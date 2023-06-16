var getKeys = function () {
    var aliceKeys = btc.ECpair.makeRandom({
        network: network
    });
    var bobKeys = btc.ECpair.makeRandom({
        network: network
    });
    var alicePublic = aliceKeys.getAddress();
    var alicePrivate = aliceKeys.toWIF();
    var bobPublic = bobKeys.getAddress();
    var bobPrivate = bobKeys.toWIF();
    console.log(alicePublic, alicePrivate, bobPublic, bobPrivate);
};
getKeys();