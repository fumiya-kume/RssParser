var FeedParser = require('feedparser');
var Request = require('request');

module.exports = class RssParser {
    constructor(targetUrl) {
        this.TargetUrl = targetUrl;
    }

    async Load() {
        var feedparser = new FeedParser({});
        const request = Request(this.TargetUrl);
        var items = [];
        var metaData = {};

        request.on('response', function (res) {
            this.pipe(feedparser);
        });

        return new Promise(function (resolve, reject) {
            feedparser.on('meta', function (meta) {
                this.metaData = meta;
            });

            feedparser.on('readable', function () {
                while (true) {
                    const item = this.read();
                    if (!item) {
                        break;
                    }
                    items.push(item);
                }
            });

            feedparser.on('end', function () {
                resolve({ meta: metaData, items: items });
            });
        });
    }
}
