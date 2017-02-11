exports.config = {

    seleniumAddress: 'http://192.168.1.67:4444/wd/hub',

    // the address of a proxy server to use for the connection to the Selenium Server
    // webDriverProxy: 'http://localhost:3128',

    directConnect: true,

    capabilities: {
        'browserName': 'firefox',
        proxy: {
            proxyType: 'manual',
            httpProxy: 'localhost:3128',
            sslProxy: 'localhost:3128'
        },
    },

    framework: 'jasmine',

    specs: ['../test/*.spec.js'],

};
