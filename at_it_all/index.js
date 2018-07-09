const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://rss.itmedia.co.jp/rss/2.0/ait.xml`;
    const rssParser = new RssParser(RssUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.res = {body:RssContent};
};
