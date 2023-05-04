import './App.css';
import Header from "./component/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./component/Layout";
import BookDetail from "./component/BookDetail";
import PostNewBookDetail from "./component/PostNewBookDetail";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Header />}/>
                    <Route path="books" element={<BookDetail/>}/>
                    <Route path="add" element={<PostNewBookDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        {/*<Header />*/}
        {/*<BookDetail />*/}
        {/*<PostNewBookDetail />*/}
    </div>
  );
}

export default App;
