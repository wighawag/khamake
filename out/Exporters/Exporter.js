"use strict";
const fs = require('fs-extra');
class Exporter {
    constructor() {
    }
    writeFile(file) {
        this.out = fs.openSync(file, 'w');
    }
    closeFile() {
        fs.closeSync(this.out);
    }
    p(line = '', indent = 0) {
        let tabs = '';
        for (let i = 0; i < indent; ++i)
            tabs += '\t';
        let data = new Buffer(tabs + line + '\n');
        fs.writeSync(this.out, data, 0, data.length, null);
    }
    copyFile(from, to) {
        fs.copySync(from, to, { clobber: true });
    }
    copyDirectory(from, to) {
        fs.copySync(from, to, { clobber: true });
    }
    createDirectory(dir) {
        fs.ensureDirSync(dir);
    }
}
exports.Exporter = Exporter;
//# sourceMappingURL=Exporter.js.map