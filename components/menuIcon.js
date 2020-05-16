import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
export default function App() {
return (
<div>
<Button
style={{
backgroundColor: "#C4C4C4",
borderRadius: "20px",
height: "50px"
}}
>
<MenuIcon
fontSize="large"
style={{
color: "#6F22FF",
fontSize: 40
}}
/>
</Button>
</div>
);
}