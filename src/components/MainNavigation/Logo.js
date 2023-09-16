import classes from "./Logo.module.css";

function Logo() {
    return (
        <div className={classes.logo}>
            <img src="logo.png" alt="Movie Library" />
        </div>
    )
}

export default Logo;