import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "./logo.jpg";
import FormControl from '@material-ui/core/FormControl';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from "@material-ui/pickers";
import Select from 'react-select';
import { speiseOptions, groupedOptions } from "./data";
import { optionsTyp, optionsGrund, optionsDepartment, optionsGewicht } from "./data";
//import { format } from "date-fns"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    width: 330
  },
}));

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};


export default function Speisereste() {

  function refreshPage() {
   // window.location.reload();
    setTimeout(() => window.location.reload(), 1300);
  }

  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [typ, setTyp] = React.useState();
  const [gast, setGast] = React.useState("");
  const [speisen, setSpeisen] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [gewicht, setGewicht] = React.useState("");
  const [grund, setGrund] = React.useState("");
  const [datum, setDatum] = React.useState(new Date().toDateString());

  const handleDatumChange = (date) => {
    setDatum(date);
  };
  
  console.log(datum);
 

  const handleTypChange = event => setTyp(event.value);
  const handleGastChange = event => setGast(event.target.value);
  const handleSpeisenChange = event => setSpeisen(event.value);
  const handleGewichtChange = event => setGewicht(event.value);
  const handleDepartmentChange = event => setDepartment(event.value);
  const handleGrundChange = event => setGrund(event.value);


  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/speisereste", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updating failed");
  }

  const handleSubmit = variables => {
    const toInput = { typ, gast, speisen, department, gewicht, grund, datum };
    sampleFunc(toInput);
    setTyp("");
    setGast("");
    setSpeisen("");
    setDepartment("");
    setGewicht("");
    setGrund("");
    setDatum(datum);

  };


  if (firstLoad) {
    //sampleFunc();
    setLoad(false);
  }


  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
          <img src={logo} width="300" height="100"  alt="logo"/>
        
        <Typography component="h1" variant="h5">
          Speisereste Analyse App
        </Typography>

        <FormControl required className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Typ<sup>*</sup></h4>
                <Select
                  placeholder="Select Typ..."
                  value={optionsTyp.find(obj => obj.value === typ)}
                  options={optionsTyp}
                  onChange={handleTypChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Anzahl Gäste<sup>*</sup></h4>
              <TextField
                name="gast"
                value={gast}
                label="Anzahl Gäste..."
                onChange={handleGastChange}
              />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Speisereste <sup>(Optional)</sup></h4>
                <Select
                  placeholder="Select Speisen..."
                  defaultValue={speiseOptions.find(obj => obj.value === speisen)}
                  options={groupedOptions}
                  formatGroupLabel={formatGroupLabel}
                  onChange={handleSpeisenChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Gewicht<sup>*</sup></h4>
                <Select
                  placeholder="Select Gewicht..."
                  value={optionsGewicht.find(obj => obj.value === gewicht)}
                  options={optionsGewicht}
                  onChange={handleGewichtChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Niederlassung<sup>*</sup></h4>
                <Select
                  placeholder="Select Niederlassung..."
                  value={optionsDepartment.find(obj => obj.value === department)}
                  options={optionsDepartment}
                  onChange={handleDepartmentChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              <h4>Grund<sup>*</sup></h4>
                <Select
                  placeholder="Select Grund..."
                  value={optionsGrund.find(obj => obj.value === grund)}
                  options={optionsGrund}
                  onChange={handleGrundChange}

                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    label="Datum"
                    value={datum}
                    format="dd/MM/yyyy"
                    onChange={handleDatumChange}
                    animateYearScrolling
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              </FormControl>
            </Grid>


          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Speichern
            </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Speisereste Eintrag"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
               Alle Felder mit einem * müssen ausgewählt werden.<br /> Möchten Sie den Eintrag Speichern?<p />
               Status: {message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Abbrechen
          </Button>
              <Button onClick={()=>{handleSubmit(); refreshPage()}} color="primary">
                Speichern
          </Button>
          
            </DialogActions>
          </Dialog>

        

          <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              </FormControl>
            </Grid>



          <Grid container justify="center">
            <Grid item>
              <Link to="/view">View Speisereste Records</Link>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item>
              <Link to="/help">View Help</Link>
            </Grid>

            <Grid item xs={12}>
              <FormControl required className={classes.formControl}>
              </FormControl>
            </Grid>


          </Grid>
        </FormControl>
      </div>
    </Container>

  );
}