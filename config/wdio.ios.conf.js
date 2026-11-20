
import { config as sharedConfig } from './wdio.shared.conf.js';
import path from 'path';

export const config = {
    ...sharedConfig,

    // Appium server port
    port: 4723,

    // Specs
    specs: [
        '../test/specs/ios_findElements.spec.js'
    ],

    // iOS Capabilities
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 17',
        'appium:automationName': 'XCUITest',
        'appium:platformVersion': '26.0',

        'appium:app': path.resolve('./app/ios/UIKitCatalog.app'),

        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:newCommandTimeout': 120
    }],

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services : ['appium'],
};
