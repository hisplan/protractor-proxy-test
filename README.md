# protractor-proxy-test

```bash
$ sudo webdriver-manager start
```

```bash
$ protractor configs/conf.chrome.js
$ protractor configs/conf.firefox.js
$ protractor configs/conf.safari.js
$ protractor configs/conf.phantomjs.js
```

## Environment

Protractor seems picky sometimes. Here'e the versions of the software that I used:

### Operating System

- macOS Sierra (10.12.3)

### Selenium

- Selenium 3.0.1 (Revision 1969d75)

### Chrome

- Chrome 56

### Safari

- Safari 10.0.3 (safari driver not required anymore for this combination)
- Enable `[Develop] - [Allow Remote Automation]`

### Firefox

- Firefox 51.0.1
- Requires `directConnect: true`
- Install a separate driver
    ```bash
    brew install geckodriver
    ```

### PhantomJS

- PhantomJS 2.1.1
- Install globally
    ```bash
    npm install -g phantomjs
    ```

## Known Issues

- Safari doesn't seem to work with a proxy configuration.
- Firefox seems to work only through direct connection.
- Direct connection is used for Chrome and Firefox. Unable to combine multiple browser-specific configs into one file due to this.
