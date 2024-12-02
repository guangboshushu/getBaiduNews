# getBaiduNews
A crawler to fetch Baidu News data

# Baidu News API

A simple Node.js project to get the latest news from Baidu.

## Installation

1. Clone the repository:
   git clone  https://github.com/guangboshushu/getBaiduNews.git

2. Change directory
  cd <project_folder>
  npm install
  
## Usage
You can use the getBaiduNews method to fetch the latest news from Baidu:

const { getBaiduNews } = require('./index');

(async () => {
  const news = await getBaiduNews();
  console.log(news);
})();

Contributing
Please fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License.
