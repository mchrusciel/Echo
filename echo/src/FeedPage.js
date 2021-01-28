import React, { useState, useEffect } from "react";
import "./FeedPage.css";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { getFeedListing } from "./requests";
const querystring = require("querystring");
console.log(333);


function FeedPage({ feedsStore, location }) {

  console.log(333);


  const [initialized, setInitialized] = useState(false);
  const [url, setUrl] = useState("");
  const [listings, setListings] = useState([]);
  const [data, setData] = useState({});
 
    
 
  const openLink = url => {
    window.location.href = url;
  };
 
  setUrl("https://www.nasa.gov/rss/dyn/breaking_news.rss");
  const response = getFeedListing("https://www.nasa.gov/rss/dyn/breaking_news.rss");
  setListings(response.data.items);
  setData(response.data.feed);
     


  return (
    <div className="feed-page">
      <h1 className="center title">
        <img src={data.image} /> {data.title}
      </h1>
      {listings.map((l, i) => {
        return (
          <Card key={i}>
            <Card.Title className="card-title">{l.title}</Card.Title>
            <Card.Body>
              <p>{l.description}</p>
              <p>{l.content}</p>
              <Button variant="primary" onClick={openLink.bind(this, l.link)}>
                Open 
              </Button>{" "}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default withRouter(observer(FeedPage));