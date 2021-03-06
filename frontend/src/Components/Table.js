import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'
import ReactToExcel from "react-html-table-to-excel"
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import logo from "./logo.jpg";
import Container from "@material-ui/core/Container";


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8)
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
  table: {
    Width: "100%"
  },
}));




const api = axios.create({
  

})


function App() {

  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.department} />  },
    {title: "Department", field: "department"},
    {title: "Typ", field: "typ"},
    {title: "Speisen", field: "speisen"},
    {title: "Grund", field: "grund"},
    {title: "Gewicht", field: "gewicht"},
    {title: "Gast", field: "gast"},
    {title: "Datum", field: "datum"}
  ]
  const [data, setData] = useState([]); //table data

  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  useEffect(() => { 
    api.get("speisereste")
        .then(res => {               
            setData(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
    if(newData.department === ""){
      errorList.push("Please enter department")
    }
    if(newData.typ === ""){
      errorList.push("Please enter typ")
    }
    if(newData.speisen === ""){
      errorList.push("Please enter speisen")
    }
    if(newData.grund === ""){
      errorList.push("Please enter grund")
    }
    if(newData.gast === ""){
      errorList.push("Please enter gast")
    }
    if(newData.datum === ""){
      errorList.push("Please enter datum")
    }


    if(errorList.length < 1){
      api.post("/speisereste/", newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Servererror"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
    
  }

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.department === ""){
      errorList.push("Please enter department")
    }
    if(newData.typ === ""){
      errorList.push("Please enter typ")
    }
    if(newData.speisen === ""){
      errorList.push("Please enter speisen")
    }
    if(newData.grund === ""){
      errorList.push("Please enter grund")
    }
    if(newData.gast === ""){
      errorList.push("Please enter gast")
    }
    if(newData.datum === ""){
      errorList.push("Please enter datum")
    }


    if(errorList.length < 1){ //no error
      api.post("/speisereste", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

    
  }

  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("/speisereste/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
  const classes = useStyles();

  return (



   <Container component="main" maxWidth="xm">
       <div className={classes.form}>
         <img src={logo} width="300" height="100"  alt="logo"/>
        
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>

          <table className={classes.formControl}
          id="Speisereste">
            <MaterialTable
              title="Speisereste Analyse App"
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                      
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                  }),
              }}
            />
            </table>

      
      
      


        <ReactToExcel
        className="Speisereste"
        table="Speisereste"
        filename="Speisereste"
        sheet="Speisereste"
        buttonText="Excel Export"
      />

   <Link className={classes.link} to="/">
        {" "}
        <Typography align="center">
        &#x2190; Back to save data
        </Typography>{" "}
      </Link>

    </div>
 </Container>

  );
}

export default App;