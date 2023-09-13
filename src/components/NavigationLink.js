const { NavLink } = require("react-router-dom");

function NavigationLink({ link, linkName }) {
    return (
            <li>
                <NavLink to={link}>
                    {linkName}
                </NavLink>
            </li>
    )
}

export default NavigationLink;
