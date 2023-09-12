import { Outlet } from "react-router-dom";
import Layout from "./Layout";

function Root() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
};

export default Root;
