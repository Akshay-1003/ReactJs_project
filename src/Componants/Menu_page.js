import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import {Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import 'semantic-ui-css/semantic.min.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function Menu_page({name}) {
  console.log(name)
  const classes = useStyles();
  const baseURL = "https://swapi.dev/api/films/?format=json";

  const [rows, setRows] = useState(null);
  const [searched, setSearched] = useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);

      setRows(response.data.results);
    });
  }, []);

  if (!rows) return null;

  function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
  return (

    <>
    <Paper>
      <SearchBar
        // value={searched}
        // onChange={(searchVal) => requestSearch(searchVal)}
        // onCancelSearch={() => cancelSearch()}
      />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Episode</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {
            rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">Episode-
                  {row.episode_id}
                </TableCell>
                <TableCell align="">Episode - {romanize(row.episode_id)} - {row.title}</TableCell>
                <TableCell align="">{row.release_date}</TableCell>
   
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </>
  )
}
