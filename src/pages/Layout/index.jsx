import Header from './header'

import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Header />
            <div className="center">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/various">Various</Link>
                        </li>
                        <li>
                            <Link to="/javascript">Javascript</Link>
                        </li>

                        <li>
                            <Link to="/count">Count</Link>
                        </li>
                        <li>
                            <Link to="/autocount">AutoCount</Link>
                        </li>
                        <li>
                            <Link to="/ref">Ref</Link>
                        </li>
                        <li>
                            <Link to="/reducer">Reducer</Link>
                        </li>
                        <li>
                            <Link to="/contexttest">ContextTest</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todos(callback)</Link>
                        </li>
                    </ul>
                </nav>


            </div>

            <Outlet />

        </>
    )
};

export default Layout;