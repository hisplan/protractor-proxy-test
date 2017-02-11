exports.config = {

    seleniumAddress: 'http://192.168.1.67:4444/wd/hub',

    // webDriverProxy: 'http://localhost:3128',

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        proxy: {
            proxyType: 'manual',
            httpProxy: 'localhost:3128',
            sslProxy: 'localhost:3128'
        },
    },

    framework: 'jasmine',

    specs: ['test.spec.js'],

};
