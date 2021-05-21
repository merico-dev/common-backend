"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowTimezoneNameStrs = exports.timezoneNames = void 0;
exports.timezoneNames = [
    {
        "name": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        "nameCn": "(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐",
        "value": "China Standard Time",
        "utcOffset": "+08:00",
        "timezoneName": "PRC",
    },
    {
        "name": "(UTC-08:00) Pacific Time (US & Canada)",
        "nameCn": "(UTC-08:00) 太平洋时间(美国和加拿大)",
        "value": "Pacific Standard Time",
        "utcOffset": "-08:00",
        "timezoneName": "Pacific/Pitcairn",
    },
    {
        "name": "(UTC-07:00) Mountain Time (US & Canada)",
        "nameCn": "(UTC-07:00) 山地时间(美国和加拿大)",
        "value": "Mountain Standard Time",
        "utcOffset": "-07:00",
        "timezoneName": "US/Mountain",
    },
    {
        "name": "(UTC-06:00) Central Time (US & Canada)",
        "nameCn": "(UTC-06:00) 中部时间(美国和加拿大)",
        "value": "Central Standard Time",
        "utcOffset": "-06:00",
        "timezoneName": "US/Central",
    },
    {
        "name": "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
        "nameCn": "(UTC+00:00) 都柏林，爱丁堡，里斯本，伦敦",
        "value": "GMT Standard Time",
        "utcOffset": "+00:00",
        "timezoneName": "GMT",
    },
    {
        "name": "(UTC) Coordinated Universal Time",
        "nameCn": "(UTC) 协调世界时",
        "value": "UTC",
        "utcOffset": "+00:00",
        "timezoneName": "UTC",
    },
    {
        "name": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        "nameCn": "(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳",
        "value": "W. Europe Standard Time",
        "utcOffset": "+01:00",
        "timezoneName": "Europe/Paris",
    },
    {
        "name": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        "nameCn": "(UTC+05:30) 钦奈，加尔各答，孟买，新德里",
        "value": "India Standard Time",
        "utcOffset": "+05:30",
        "timezoneName": "Asia/Kolkata",
    },
    {
        "name": "(UTC+09:00) Osaka, Sapporo, Tokyo",
        "nameCn": "(UTC+09:00) 大阪，札幌，东京",
        "value": "Tokyo Standard Time",
        "utcOffset": "+09:00",
        "timezoneName": "Asia/Tokyo",
    },
    {
        "name": "(UTC+10:00) Canberra, Melbourne, Sydney",
        "nameCn": "(UTC+10:00) 堪培拉，墨尔本，悉尼",
        "value": "AUS Eastern Standard Time",
        "utcOffset": "+10:00",
        "timezoneName": "Australia/Sydney",
    },
];
exports.allowTimezoneNameStrs = exports.timezoneNames.map(v => v.timezoneName);
