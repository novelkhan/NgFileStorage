export const environment = {
    production: false,
    appUrl: 'http://localhost:5168',
    userKey: 'fileStorageAppUser',
    minutes: 10,                  // Written in seconds (Can not contain less than 1)
    secondsPerMinute: 60,         // 10*60 = 600 seconds (10 minutes)
    targetTime: 120               // Written in seconds
};