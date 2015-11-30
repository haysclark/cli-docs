'use strict';

var path = require('path'),
    fs = require('fs');

function create(basepath, encoding, suffix) {
    /**
     * returns information for topic
     *
     * @param name
     * @param callback
     */
    function read(name, callback) {
        var filename = formatName(name);

        // full doc file path
        var fullbasepath = path.join(__dirname, basepath);
        var filepath = path.join(fullbasepath, filename);

        // get docLoader info
        var data = fs.readFileSync(filepath, encoding);
        callback(null, data);
    }

    /**
     * returns filename format: docLoader.topic.txt
     *
     * @param filepath
     */
    function formatName(filename) {
        var name = filename;
        if(suffix && suffix.length > 0) {
            var filepath = [filename];
            filepath.push(suffix);
            name = filepath.join('.');
        }
        return name;
    }

    return {
        read: read
    };
}

module.exports = {
    create: create
};
