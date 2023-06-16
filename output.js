var request = require('request');
var getOutputs = function(){
    var url = blockCypherTestnetApiEndpoin + 'addrs/' +
    'mvBbmN5f9oX99v288kePeNgBDD4SYjvm5s' + '?unspentOnly=true';
    return new Promise(function(resolve, reject){
        request.get(url, function(err, res, body){
            if(err){
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