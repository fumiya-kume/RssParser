const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const pixivUrl = `https://techlife.cookpad.com/feed`;
    const rssParser = new RssParser(pixivUrl);
    const RssContent = await rssParser.Load("https://www.tumutoku.com/wp/wp-content/uploads/2017/09/rogo-297x300.jpg");
    context.bindings.RssBlob = RssContent;
    context.res = { body: RssContent };
};
