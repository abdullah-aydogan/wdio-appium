require('dotenv').config();
const { config } = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/android/add-note-screen*.js'
];

config.capabilities = [
    {
        'platformName': 'android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:automationName': 'UIAutomator2',
        'appium:app': "bs://b425d41909537ab90b0054fc59458339540d33a9",
        "appium:autoGrantPermissions": true
    }
];

config.services = ['browserstack'];

exports.config = config;