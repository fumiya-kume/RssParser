const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://tech.mercari.com/feed`;
    const rssParser = new RssParser(RssUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
