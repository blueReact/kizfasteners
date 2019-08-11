const fs = require('fs');
const path = require('path');
const UglifyJS = require("uglify-js");

var dirname = './public/scripts';
var filePath = dirname + '/minified.js';

// if exists remove it immediately
if (fs.existsSync(filePath)) {
    global.console.log('File already exists!');
    
    fs.unlink(filePath, function (err) {
        if (err) return console.log(err);
        global.console.log('file deleted successfully');
    });
}

// if (fs.existsSync(dirname) && !fs.existsSync(filePath)) {
if (fs.existsSync(dirname)) {

    fs.readdir(dirname, function (err, filenames) {

        if (err) {
            global.console.log(err)
        }

        // reordering the array
        // module must be the file angualrjs file
        
        var tmpControllerFile = filenames[0];
        var tmpDirectiveFile = filenames[1];
        var tmpModuleFile = filenames[2];
        var tmpRouterFile = filenames[3];

        filenames[0] = tmpModuleFile;
        filenames[1] = tmpControllerFile;
        filenames[2] = tmpDirectiveFile;
        filenames[3] = tmpRouterFile;   
        
        console.log(filenames)

        filenames.forEach(function (filename, index) {

            var ext = path.extname(filename.toString());

            // only supports .js for JS minification
            if (ext === '.js') {

                fs.readFile(dirname + '/' + filename, 'utf-8', function (err, content) {

                    if (err) {
                        global.console.log(err)
                    }

                    // advance UglifyJS configuration
                    var result = UglifyJS.minify(content, {
                        parse: {},
                        compress: true,
                        mangle: false,
                        output: {
                            ast: true,
                            code: true // optional - faster if false
                        },
                        ie8: true,
                        keep_fnames: true
                    });

                    // global.console.log(result.error); // runtime error, or `undefined` if no error
                    // global.console.log(result.code); // minified output: function add(n,d){return n+d}

                    // Async variant
                    // fs.writeFile('final.js', result.code, {
                    //     flag: "a"
                    // }, (err) => {
                    //     if (err) {
                    //         global.console.log(err)
                    //     }
                    //     global.console.log('The file has been saved!');
                    // });

                    // Sync variant                   
                    return fs.writeFileSync(filePath, result.code, {
                        flag: "a" // Open file for appending. The file is created if it does not exist.
                    });

                });

            }

            // handle otherwise
            else {

                fs.unlink(dirname + '/' + filename, (err) => {
                    if (err) throw err;
                    global.console.log(filename, 'was skipped and trashed!');
                });

            }

        });

        console.log('Minified JS has been created successfully!');

    });

}



if (!fs.existsSync(dirname)) {
    global.console.log('Unable to find public folder! Please make sure it exits.');
}