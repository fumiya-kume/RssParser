const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://engineering.linecorp.com/ja/blog/rss2`;
    const rssParser = new RssParser(RssUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
