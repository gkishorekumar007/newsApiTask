import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList: React.FC = () => {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?category=sports&apikey=d092b70915004fb0b6dd1a529bebc5a9&page=1"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div>
      <h1>News</h1>
      {news.map((item: any, index: number) => (
        <div key={index} style={{ border: "2px solid white", padding: "5px" }}>
          <h3>Author:</h3>
          <p>{item.author}</p>
          <h4>Title:</h4>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
