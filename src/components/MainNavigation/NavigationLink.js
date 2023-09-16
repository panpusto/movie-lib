import classes from "./NavigationLink.module.css";
const { NavLink } = require("react-router-dom");

function NavigationLink({ link, linkName }) {
    return (
            <li className={classes.navLink}>
                <NavLink to={link}>
                    {linkName}
                </NavLink>
            </li>
    )
}

export default NavigationLink;
