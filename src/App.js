import React, { useState, useEffect } from "react";
import alanbtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import UseStyles from "./Styles";
import logo from "./Logo/logo3.jpg";
import wordsToNumber from "words-to-numbers";
import NavBar from "./components/NavBar/NavBar";
const key =
  "9a534097ddb3458c2d9666fd8495da3f2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);
  const classes = UseStyles();
  useEffect(() => {
    alanbtn({
      key: key,
      onCommand: ({ command, articles, number }) => {
        if (command === "newsHeadLines") {
          setNewsArticles(articles);
          setactiveArticle(-1);
        } else if (command === "highlight") {
          setactiveArticle((prevArticle) => prevArticle + 1);
        } else if (command === "openArticle") {
          const ParsedNumber =
            number.length < 2 ? number : wordsToNumber(number, { fuzzy: true });
          const articleToOpen = articles[ParsedNumber - 1];
          console.log(ParsedNumber);
          if (ParsedNumber > 20 || ParsedNumber < 0) {
            alanbtn().playText("Please try that again.");
          } else if (articleToOpen) {
            window.open(articleToOpen.url, "_blank");
            alanbtn().playText("opening the selected article...");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <div>
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.newsOnLogo} alt="newsOn Logo" />
        </div>
        <div>
          <h4
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {newsArticles.length > 0
              ? "Try Saying : Go Back ,Open Article Number 5 etc"
              : null}
          </h4>
        </div>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <NavBar />
    </div>
  );
}

export default App;
