const axios = require('axios');
const cheerio = require('cheerio');


// 自定义函数，查找所有 <h3> 的上一层 <div>
function findParentDivOfH3(html) {
    const $ = cheerio.load(html);
    const results = [];

    // 遍历所有的 <h3> 标签
    $('h3').each(function () {
        // 获取 <h3> 标签的上一层 <div> 标签
        const parentDiv = $(this).closest('div');  // 使用 .closest('div') 查找最近的父 div 元素

        if (parentDiv.length > 0) {
            const title = $(this).find("a[aria-label^='标题：']").text().trim();
            const titleUrl = $(this).find("a[aria-label^='标题：']").attr("href");
            const leftImgSrc = parentDiv.find("img").first().attr("src");
            const hasImg = leftImgSrc ? true : false;
            const summary = parentDiv.find(".c-font-normal.c-color-text").text().trim();
            const dispTime = parentDiv.find(".c-color-gray2.c-font-normal").text().trim();
            const sourceIcon = parentDiv.find(".source-img_33bs5").attr("src");
            const sourceName = parentDiv.find(".news-source_Xj4Dv span.c-color-gray").text().trim();
            const rtses = parentDiv.find(".news-source_Xj4Dv span.c-color-gray").text().trim();  // 来源名相同

            // 将结果存入数组
            results.push({
                title,
                titleUrl,
                leftImgSrc,
                hasImg,
                summary,
                dispTime,
                sourceIcon,
                rtses,
                sourceName
            });
        }
    });

    return results;
}


const getBdiduNews = (keyWord) => {
    const _keyWord = encodeURIComponent(keyWord)
    const cookies = 'here is your cookies'
    // 设置请求URL
    const url = `https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&rsv_dl=ns_pc&word=${_keyWord}`;
    // 发起GET请求
    return axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Cookie': cookies  // 将 Cookie 添加到请求头中
        }
    })
        .then(response => {
            // 请求成功后，输出页面内容
            return (findParentDivOfH3(response.data));
        })
        .catch(error => {
            // 错误处理
            console.error('Error:', error);
        });

}

module.exports = getBdiduNews

getBdiduNews('mcu').then(res => {
    console.log(res)
})