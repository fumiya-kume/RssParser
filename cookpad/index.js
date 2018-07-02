const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const pixivUrl = `https://techlife.cookpad.com/feed`;
    const rssParser = new RssParser(pixivUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.res = {body:RssContent};
};
