const RssParser = require('../lib/RssParser');

module.exports = async function (context, req) {
    const pixivUrl = `https://techlife.cookpad.com/feed`;
    const rssParser = new RssParser(pixivUrl);
    const RssContent = await rssParser.Load();
    context.log(RssContent);
    RssContent.map(item =>{
        if(!item.Thumbnail || item.Thumbnail == null){
            item.Thumbnail = "https://axxis.co.jp/magazine/wp-content/uploads/2016/01/cookpad.jpg";
        }
        return item
    })
    context.bindings.RssBlob = RssContent
    context.res = {body:RssContent};
};
