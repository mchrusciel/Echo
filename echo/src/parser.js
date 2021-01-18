import * as rssParser from 'react-native-rss-parser';

return fetch('https://www.reddit.com/r/JRPG.rss')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    console.log(rss.title);
    console.log(rss.items.length);
  });   