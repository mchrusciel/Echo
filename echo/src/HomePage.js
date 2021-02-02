import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { observer } from "mobx-react";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
const querystring = require("querystring");



function HomePage({ feedsStore }) {
  const [initialized, setInitialized] = useState(false);
  const [redirectToFeed, setRedirectToFeed] = useState(false);
    /*const isValid = await schema.validate(evt);
    if (!isValid) {
      return;
    }*/
    //feedsStore.feeds.push("https://www.nasa.gov/rss/dyn/breaking_news.rss");
   // feedsStore.setFeeds(feedsStore.feeds);
    //localStorage.setItem("feeds", JSON.stringify(feedsStore.feeds));
 
  const setSelectedFeed = url => {
    feedsStore.setSelectedFeed(url);
    setRedirectToFeed(true);
  };
  const deleteFeed = index => {
    feedsStore.feeds.splice(index, 1);
    feedsStore.setFeeds(feedsStore.feeds);
    localStorage.setItem("feeds", JSON.stringify(feedsStore.feeds));
  };
  useEffect(() => {
    if (!initialized) {
      let rssFeeds = [];
      try {
        rssFeeds = JSON.parse(localStorage.getItem("feeds"));
        if (Array.isArray(rssFeeds)) {
          feedsStore.setFeeds(rssFeeds);
        }
      } catch (ex) {}
      setInitialized(true);
    }
  });
  if (redirectToFeed) {
    return (
      <Redirect to={`/feed?${querystring.encode({ url: feedsStore.feed })}`} />
    );
  }
  return (
    <div className="home-page">
      <h1 className="center">RSS Feeds</h1>
    

      {feedsStore.feeds.map((f, i) => {
        return (
          <Card key={i}>
            <Card.Title className="card-title">Nasa Feed</Card.Title>
            <Card.Body>
              <p>{f}</p>
              <Button
                variant="primary"
                onClick={setSelectedFeed.bind(this, f)}
              >
                Open
              </Button>{" "}
              <Button variant="primary" onClick={deleteFeed.bind(this, i)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default observer(HomePage);


