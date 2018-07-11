const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const pixivUrl = req.query.page ? `https://inside.pixiv.blog/feed?page=${req.query.page}` : "https://inside.pixiv.blog/feed";
    const rssParser = new RssParser(pixivUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
