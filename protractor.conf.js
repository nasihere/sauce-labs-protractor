exports.config = {
 
  
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],

  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']},
    'username': 'nasihere',
    'accessKey': '715dd561-497a-4964-83f4-87e652571071',
    'shardTestFiles': true,
    'maxInstances': 2,
    'version': '56'
  },


  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
