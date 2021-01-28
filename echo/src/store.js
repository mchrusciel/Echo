import { observable, action, makeObservable } from "mobx";
class FeedsStore {
  feeds = [];
  feed = "";
  
    constructor(){
        makeObservable(this, {
            feeds: observable,
            feed: observable,
            setFeeds: action,
            setSelectedFeed: action,
            });



    }



  setFeeds(feeds) {
    this.feeds = feeds;
  }
  setSelectedFeed(feed) {
    this.feed = feed;
  }

}

export { FeedsStore };