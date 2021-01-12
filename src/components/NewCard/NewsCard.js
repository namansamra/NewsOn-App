import React, { useEffect, useState, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import defaultCardimg from './newsdefault.png'

import useStyle from "./Style";

const NewCard = ({
  article: { description, title, url, urlToImage, source, publishedAt },
  i,
  activeArticle,
}) => {
  const classes = useStyle();
  const [Elrefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && Elrefs[activeArticle]) {
      scrollToRef(Elrefs[i]);
    }
  }, [i, activeArticle, Elrefs]);
  return (
    <Card
      ref={Elrefs[i]}
      className={activeArticle === i ? classes.activeCard : classes.card}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={urlToImage || defaultCardimg}
        />
        <div className={classes.details}>
          <Typography>{source.name}</Typography>
          <Typography>{new Date(publishedAt).toDateString()}</Typography>
        </div>

        <Typography className={classes.title} gutterBottom variant="h6">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" content="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          See More
        </Button>
        <Typography>{i + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewCard;
