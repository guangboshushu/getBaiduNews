const getBaiduNews = require('../src/index');  // 相对路径，指向 src 目录中的 index.js

test('should return a list of news', async () => {
    const news = await getBaiduNews('Tesla');
    console.log('News:', news)
    expect(news).toBeDefined();  // 确保返回的新闻数据是定义过的
    expect(news.length).toBeGreaterThan(0);  // 确保新闻列表有内容
});