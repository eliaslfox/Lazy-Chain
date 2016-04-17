const Mocha = require('mocha')
const fs = require('fs')
const path = require('path')

var mocha = new Mocha();
const testDir = './test'

fs.readdirSync(testDir)
.forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});
