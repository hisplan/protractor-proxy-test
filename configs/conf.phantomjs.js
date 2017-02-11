exports.config = {

    seleniumAddress: 'http://192.168.1.67:4444/wd/hub',

    // the address of a proxy server to use for the connection to the Selenium Server
    // webDriverProxy: 'http://localhost:3128',

    capabilities: {
        'browserName': 'phantomjs',
        proxy: {
            proxyType: 'manual',
            httpProxy: 'localhost:3128',
            sslProxy: 'localhost:3128'
        }

        /* 
         * Can be used to specify the phantomjs binary path.
         * This can generally be ommitted if you installed phantomjs globally.
         */
        // 'phantomjs.binary.path': require('phantomjs-prebuilt').path,

        /*
         * Command line args to pass to ghostdriver, phantomjs's browser driver.
         * See https://github.com/detro/ghostdriver#faq
         */
        // 'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },

    framework: 'jasmine',

    specs: ['../test/*.spec.js'],

};
