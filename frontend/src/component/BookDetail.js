import EditBookDetails from "./EditBookDetails";
import {useEffect, useState} from "react";
import DeleteBookDetails from "./DeleteBookDetails";
import '../App.css';


const API = 'http://localhost:8080/api/amazon-book-details/v1/';
function BookDetail(){
    const [bookDetail, setBookDetail] = useState([]);
    useEffect(() =>{
        fetch(API, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(data => setBookDetail(data))
            .catch(err => console.log(err))
    },[]);

    const handleDelete = (bookID) => {
        setBookDetail((prevState) =>
            prevState.filter((book) => book.bookId !== bookID));
        // fetch(API, {
        //     method: 'GET',
        //     mode: 'cors',
        //     headers: {'Content-Type': 'application/json'}
        // }).then(res => res.data)
        //     .then(data => setBookDetail(data))
        //     .catch(console.error)
    };

    return(
        <div>
            <div className="row">
                {bookDetail.map(item => (
                    <div key={item.bookId} className="Card">
                        <h2 className="title">{item.bookName}</h2>
                        <div className="information product-details">
                            <p>Author's First Name: {item.author.firstName}</p>
                            <p>Author's Last Name: {item.author.lastName}</p>
                            <p>Cover Type: {item.productInformation.bookCoverType}</p>
                            <p>Publisher: {item.productInformation.publisher}</p>
                            <p>Language: {item.productInformation.language}</p>
                            <p>Dimension: {item.productInformation.dimensions}</p>
                            <p>ISBN-10: {item.productInformation.isbn_10}</p>
                            <p>ISBN13: {item.productInformation.isbn_13}</p>
                            <p>ASIN: {item.productInformation.asin}</p>
                        </div>
                        <EditBookDetails />
                        <DeleteBookDetails bookID={item.bookId} onDelete={handleDelete}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default BookDetail;