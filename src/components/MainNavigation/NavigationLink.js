import classes from "./NavigationLink.module.css";
const { NavLink } = require("react-router-dom");

function NavigationLink({ link, linkName }) {
    return (
            <li className={classes.navLinks}>
            <NavLink
                to={link}
                className={({ isActive }) =>
                    isActive
                        ? `${classes.navLink} ${classes.active}` 
                        : classes.navLink}>
                    {linkName}
                </NavLink>
            </li>
    )
}

export default NavigationLink;
