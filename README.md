# getBaiduNews - Baidu News API for Testing
A crawler to fetch Baidu News data

# Baidu News API Demo

A simple Node.js project to get the latest news from Baidu.

You can use the following English description to clarify the usage restrictions for the project:
**Baidu News API for Testing**  is intended strictly for practice and educational purposes only. It is not allowed to be used for commercial purposes, and any use of this project must comply with relevant laws and regulations. Users are responsible for ensuring their usage adheres to applicable legal and ethical guidelines.


## Installation

1. Clone the repository:
```bash
   git clone  https://github.com/guangboshushu/getBaiduNews.git
```
2. Change directory
```bash
  cd <project_folder>
  npm install
```  
## Usage
You can use the getBaiduNews method to fetch the latest news from Baidu:

```js
const getBaiduNews = require('../src/index');

(async () => {
  const news = await getBaiduNews('Tesla');
  console.log(news);
})();
```
## Test
```bash
npm test
```

## Contributing
Please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License.
