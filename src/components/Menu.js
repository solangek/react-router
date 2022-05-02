
import {Link} from 'react-router-dom';
import {Outlet} from "react-router";

export default function Menu(props) {

    return (
        <div>
            <h1>An example of browser-router</h1>

            <Link to="/">Home</Link> {' '} | {' '}
            <Link to="/otherpage">Other page</Link>
            <Outlet />
        </div>
    );
}