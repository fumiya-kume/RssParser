const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const pixivUrl = `http://blog.cybozu.io/feed`;
    const rssParser = new RssParser(pixivUrl);
    const ThumbnailImageUrl = "https://cdn.image.st-hatena.com/image/scale/93c02e7921ee4cc02bd26afd9f591bbfacd6253e/backend=imager;enlarge=0;height=1000;version=1;width=1200/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fdefault_entry_og_image%2F110495017%2F1514249404572921"
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
