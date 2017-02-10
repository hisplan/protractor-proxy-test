exports.config = {

    seleniumAddress: 'http://192.168.1.67:4444/wd/hub',

    proxy: {
        proxyType: 'manual',
        httpProxy: 'localhost:3128',
        sslProxy: 'localhost:3128'
    },

    webDriverProxy: 'http://localhost:3128',

    specs: ['test.spec.js'],

};
