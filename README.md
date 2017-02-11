# protractor-proxy-test

```bash
$ sudo webdriver-manager start
```

```bash
$ protractor conf.chrome.js
$ protractor conf.firefox.js
$ protractor conf.safari.js
$ protractor conf.phantomjs.js
```

## Operating System

- macOS Sierra (10.12.3)

## Selenium

- Selenium 3.0.1 (Revision 1969d75)

## Chrome

- Chrome 56

## Safari

- Safari 10.0.3 (safari driver not required anymore for this combination)
- Enable `[Develop] - [Allow Remote Automation]`

## Firefox

- Firefox 51.0.1
- Requires `directConnect: true`
- Install a separate driver
    ```bash
    brew install geckodriver
    ```

## PhantomJS

- PhantomJS 2.1.1
- Install globally
    ```bash
    npm install -g phantomjs
    ```

## Known Issues

- Safari/Protractor doesn't support proxy.