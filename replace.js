const fs = require('fs');

const timer = () => {
    const start = new Date();
    return {
        stop: function () {
            const end = new Date();
            return end.getTime() - start.getTime();
        }
    }
};

const benchmarkReplace = () => {
    fs.readFile('./loremIpsum', 'utf8', (err, data) => {
        const t = timer('Using the replace method');
        data.replace(/lorem/gmi, `lor`);
        console.log(`Replace method: ${t.stop()}`);
    });
}

const benchmarkSplit = () => {
    fs.readFile('./loremIpsum', 'utf8', (err, data) => {
        const t = timer('Using split and join');
        data.split(/lorem/gmi).join(`lor`);
        console.log(`Split and Join time: ${t.stop()}`);
    });
}

// for (i = 1; i <= 10; i += 1) {
//     benchmarkReplace();
// }

for (i = 1; i <= 10; i += 1) {
    benchmarkSplit();
}

