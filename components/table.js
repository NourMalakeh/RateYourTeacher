import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
table: {
minWidth: 650
}
});

function createData(name, subject, rating) {
return { name, subject, rating };
}

const rows = [
createData("Maya", "Math", 4.9),
createData("Mike", "English", 4.8),
createData("Marya", "Arabic", 4.7)
];

export default function SimpleTable() {
const classes = useStyles();

return (
<TableContainer
component={Paper}
style={{ backgroundColor: "#89898A", width: 800 }}
>
<Table className={classes.table}>
<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell align="right">Subject</TableCell>
<TableCell align="right">Rating</TableCell>
</TableRow>
</TableHead>
<TableBody>
{rows.map(row => (
<TableRow key={row.name} style={{ backgroundColor: "#C4C4C4" }}>
<TableCell component="th" scope="row">
{row.name}
</TableCell>
<TableCell align="right">{row.subject}</TableCell>
<TableCell align="right">{row.rating}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
}