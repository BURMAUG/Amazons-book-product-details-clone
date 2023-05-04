import Layout from "./Layout";

function Header(){

    return (
        <div className="main-div">
            <div className="header-box">
                <header className="header">
                    <h2 className="header-primary">
                        <span className="header-primary-main">Amazon's</span>
                        <span className="header-primary-sub">Book Product Information API</span>
                    </h2>
                    <div className="information-div">
                                <a href="#">Post A New Book Info</a>
                                <a className="information" href="#"> View Current Books Info</a>
                    </div>
                </header>
            </div>
        </div>
    );
}
export default Header;