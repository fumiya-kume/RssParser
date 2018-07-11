const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf`;
    const rssParser = new RssParser(RssUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
