import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "80%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
    border: "10px solid white",
  },
  activeCard: {

    border: "10px solid white",
    borderTop:"10px solid green",
    borderBottom: "10px solid green",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
