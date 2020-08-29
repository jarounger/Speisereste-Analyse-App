import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: `10px`,
    height: "100%",
    width: "99%",
    marginTop: theme.spacing(7)
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)"
    }
  }
}));



function createData(name, behaelter, gewicht) {
  return { name, behaelter, gewicht };
}

const rows = [
  createData('Fleisch', 1, 3.0),
  createData('Spätzle', 1, 2.0),
  createData('Gemüse', 0.5, 1.0),
  createData('Kartoffel', 1, 2.0),
  createData('Reis', 0.5, 1.0),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Speisereste Einheiten</Typography></TableCell>
            <TableCell align="right">GN Behälter</TableCell>
            <TableCell align="right">Gewicht (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.behaelter}</TableCell>
              <TableCell align="right">{row.gewicht}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


<Link className={classes.link} to="/">
{" "}
<Typography align="left">
  &#x2190; Back to save data
</Typography>{" "}
</Link>
</div>

  );
}