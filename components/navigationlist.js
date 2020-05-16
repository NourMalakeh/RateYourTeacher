import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

export default function TemporaryDrawer() {
const [state, setState] = React.useState({
left: false
});

const toggleDrawer = (anchor, open) => event => {
if (
event.type === "keydown" &&
(event.key === "Tab" || event.key === "Shift")
) {
return;
}

setState({ ...state, [anchor]: open });
};

const list = anchor => (
<div
onClick={toggleDrawer(anchor, false)}
onKeyDown={toggleDrawer(anchor, false)}
>
<List>
{["Find you teacher", "Settings"].map((text, index) => (
<ListItem button key={text}>
<ListItemIcon>
{index % 2 === 0 ? <SearchIcon /> : <SettingsIcon />}
</ListItemIcon>
<ListItemText primary={text} />
</ListItem>
))}
</List>
<Divider />
</div>
);

return (
<div>
{["left"].map(anchor => (
<React.Fragment key={anchor}>
<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
<Drawer
anchor={anchor}
open={state[anchor]}
onClose={toggleDrawer(anchor, false)}
>
{list(anchor)}
</Drawer>
</React.Fragment>
))}
</div>
);
}