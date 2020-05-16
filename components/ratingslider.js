import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
root: {
width: 500
},
margin: {
height: theme.spacing(3)
}
}));

const Rating = withStyles({
root: {
color: "#6F22FF",
height: 8
},
thumb: {
height: 24,
width: 24,
backgroundColor: "#fff",
border: "2px solid currentColor",
marginTop: -8,
marginLeft: -12,
"&:focus, &:hover, &$active": {
boxShadow: "inherit"
}
},
active: {},
valueLabel: {
left: "calc(-50% + 4px)"
},
track: {
height: 8,
borderRadius: 4
},
rail: {
height: 8,
borderRadius: 4
}
})(Slider);

export default function CustomizedSlider() {
const classes = useStyles();

return (
<div className={classes.root}>
<Typography>Rating</Typography>
<Rating
valueLabelDisplay="auto"
aria-label="pretto slider"
defaultValue={2}
marks
min={1}
max={5}
/>
</div>
);
}