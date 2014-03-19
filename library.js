//library.js

var Imgbed = {},
    XRegExp = require('xregexp').XRegExp,
    regexStr = '(https?://[^\.]+\.[^\/]+\/[^\.]+\..*';

// declare regex as global and case-insensitive
var regex = XRegExp(regexStr, 'gi');

Imgbed.parse = function(postContent, callback){
    if (postContent.match(regex)){
        postContent = postContent.replace(regex, 'lolilol');
    }
    callback(null, postContent);
}


module.exports = Imgbed;
