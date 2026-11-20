
import { config as sharedConfig } from './wdio.shared.conf.js';
import path from 'path';

export const config = {
    ...sharedConfig,

    // Appium server port
    port: 4723,

    // Specs
    specs: [
        '../test/specs/add-note-screen.spec.js'
    ],

    // Android capabilities
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android_17',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '17',

        'appium:app': 'D:/Thanuj/Notes/WebDriverIO/WeDriverIO_Practise/app/android/ColorNote_Notepad.apk',

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
