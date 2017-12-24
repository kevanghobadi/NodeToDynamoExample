var path    = require("path");



exports.hello = function(req, res) {
 res.sendFile(path.join(__dirname+'/../views/upload.html'));
}
