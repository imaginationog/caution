import fs from 'fs';

const config: Config = {
    apiId: 28757012, // Replace with your API ID
    apiHash: 'e397d7a295c6c2dbcc31dad45b7c6405', // Replace with your API hash
    token: '6975392056:AAE9yI5EbkhPA_M9oLGQDesyxRAhoHsYM-M', // Replace with your bot token
    staff: [6075292981],
    channels: {
        proofTopics: -4152640080,
        publicLog: -1002039778366,
        privateReports: -4152640080,
        privateAppeals: -4152640080,
        privateProofDump: -4152640080,
        whitelist: [],
    },
    options: {
        revokeMessagesOnBan: true,
    },
    cooldowns: {
        reports: 30,
        appeals: 60 * 24 * 7, // 7 days
        advertisement: 60 * 16, // 16 hours
        memberScrape: 60 * 24 * 7, // 7 days
    },
    mongo: {
        dbName: 'ggs', // Your MongoDB database name
        url: 'mongodb+srv://Zig:zigzag@ggscams.dtmoxl4.mongodb.net/', // Your MongoDB connection URL
    },
};

if (!fs.existsSync('./config.json')) {
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 4));
    console.log('Config file created. Please fill it out before starting the bot.');
    process.exit(0);
}

Object.assign(config, JSON.parse(fs.readFileSync('./config.json', 'utf8')));
export default config;

fs.writeFileSync('./config.json', JSON.stringify(config, null, 4));

type Config = {
    apiId: number;
    apiHash: string;
    token: string;
    staff: number[];
    channels: {
        proofTopics: number;
        publicLog: number;
        privateReports: number;
        privateAppeals: number;
        privateProofDump: number;
        whitelist: number[];
    };
    options: {
        revokeMessagesOnBan: boolean;
    };
    cooldowns: {
        reports: number;
        appeals: number;
        advertisement: number;
        memberScrape: number;
    };
    mongo: {
        dbName: string;
        url: string;
    };
};
