import React from "react";
import NewsCard from "../NewCard/NewsCard";
import { Grow, Grid,Typography} from "@material-ui/core";
import useStyles from "./Style";
const infoCards = [
  { color: "#00835f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1555c0",
    title: "News by Categories",
    info: "Business, Entertainment, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#3fb5b5",
    title: "News by Terms",
    info: "Tesla Motors, Iphone 12, Smartphones,Corona Virus, Narendra Modi...",
    text: "Tell me about PlayStation 5",
  },
  {
    color: "#f56786",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h7" component="h7">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h7" component="h7">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h7" component="h7">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard i={i} article={article} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
