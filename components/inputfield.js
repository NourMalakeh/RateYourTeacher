import React from 'react';
import {
fade,
withStyles,

} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Comments = withStyles((theme) => ({
root: {
'label + &': {
marginTop: theme.spacing(3),
},
},
input: {
borderRadius: 47,
backgroundColor: '#b790ff',
fontSize: 15,
width: '500px',
transition: theme.transitions.create(['border-color', 'box-shadow']),

'&:focus': {
boxShadow: `${fade(theme.palette.primary.main, 0.15)} 0 0 0 0.2rem`,
borderColor: theme.palette.secondary.main,
},
},
}))(InputBase);

export default function App() {
return (
<form >
<FormControl >
<InputLabel shrink >
Label
</InputLabel>
<Comments />
</FormControl>
</form>
);
}                                                   