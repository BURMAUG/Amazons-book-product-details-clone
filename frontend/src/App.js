import './App.css';
import PostNewBookDetail from "./component/PostNewBookDetail";
import Header from "./component/Header";
import BookDetail from "./component/BookDetail";
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
            {/*<div className="col">*/}
                <BookDetail />
            {/*</div>*/}
        {/*<Link to="/postBookInfo" > Post A Book Info</Link>*/}
        <PostNewBookDetail />
        {/*<Outlet />*/}
    </div>
  );
}

export default App;
