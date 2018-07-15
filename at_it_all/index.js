const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const RssUrl = `https://rss.itmedia.co.jp/rss/2.0/ait.xml`;
    const rssParser = new RssParser(RssUrl);
    const ThumbnailImageUrl = "http://image.itmedia.co.jp/images/logo/pcvheader_ait.png";
    const RssContent = await rssParser.Load(ThumbnailImageUrl);
    context.log(RssContent);
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
