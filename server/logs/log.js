var fs = require('fs');

function insertLog(log,path) {
    var logPath = typeof path == "undefined" ? "./logs/all-log.txt" : path;
    fs.readFile(logPath, "UTF-8", (err, data) => {
        if (err) throw err;
        var x = data;
        x += "\r\n";
        x += "\r\n";
        x += log;

        fs.writeFile(logPath, x, function(err) {
            if(err) {
                return console.log(err);
            }
        });
    });
}

module.exports.insertLog = insertLog;