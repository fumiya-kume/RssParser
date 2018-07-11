const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://rss.itmedia.co.jp/rss/1.0/pcupdate.xml`;
    const rssParser = new RssParser(RssUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
