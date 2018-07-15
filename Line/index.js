const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://engineering.linecorp.com/ja/blog/rss2`;
    const rssParser = new RssParser(RssUrl);
    const ThumbnailImageUrl = "https://lh3.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs";
    const RssContent = await rssParser.Load(ThumbnailImageUrl);
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
