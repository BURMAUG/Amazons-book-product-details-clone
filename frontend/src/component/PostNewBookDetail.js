import {useState} from "react";
import BookPostService from "../service/BookPostService";

const PostNewBookDetail = () =>{
    const [bookDetail, setBookDetail] = useState({
        bookName: "",
        author: {
            firstName: "",
            lastName: ""
        },
        productInformation: {
            asin: "",
            publisher: "",
            language: "",
            bookCoverType: "",
            isbn_10: "",
            isbn_13: "",
            itemWeight: '',
            dimensions: ""
        }

    });

    function postBook(e){
        e.preventDefault();
        BookPostService.postNewBookDetails(bookDetail)
            .then(res => res.json())
            .then(data => postBook(data))
            .catch(err => console.log("HERE IS THE ERROR" + err))
    }
    // function handleChange(e){
    //     const { name, value } = e.target;
    //
    //     if (name.includes(".")) {
    //         const [parent, child] = name.split(".");
    //         setBookDetail(prevState => ({
    //             ...prevState,
    //             [parent]: {
    //                 ...prevState[parent],
    //                 [child]: value
    //             }
    //         }));
    //     } else {
    //         setBookDetail(prevState => ({
    //             ...prevState,
    //             [name]: value
    //         }));
    //     }
    // }
    function handleChange(e){
        const { name, value } = e.target;

        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setBookDetail(prevState => ({
                ...prevState,
                [parent]: {
                    ...prevState[parent],
                    [child]: value
                }
            }));
        } else if (name === "productInformation.bookCoverType") {
            // Ensure that the value is valid
            if (["HARDCOVER", "PAPER", "AUDIO"].includes(value)) {
                setBookDetail(prevState => ({
                    ...prevState,
                    productInformation: {
                        ...prevState.productInformation,
                        bookCoverType: value
                    }
                }));
            } else {
                console.log("Invalid book cover type");
            }
        } else {
            setBookDetail(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }


    return(
        <div>
            <form className="form" onSubmit={postBook}>
                {/*<fieldset>*/}
                    <legend className="legend-primary"> <h1> Product Details </h1> </legend>
                    {/*<label>Book Title: </label>*/}
                    <input placeholder="Book Title" className="input book-title" name="bookName" value={bookDetail.bookName} type="text" onChange={handleChange}/>
                    <br/>

                    {/*<label htmlFor="author.firstName" >Author's First Name </label>*/}
                    <input placeholder="Author's First Name" className="input author-firstname" name="author.firstName" value={bookDetail.author.firstName} type="text" onChange={handleChange}/>
                    <br/>

                    {/*<label htmlFor="author.lastName" >Author's Last Name </label>*/}
                    <input placeholder="Author's Last Name" className="input" name="author.lastName" value={bookDetail.author.lastName} type="text" onChange={handleChange}/>
                    <br/>

                    {/*<label htmlFor="productInformation.asin">ASIN </label>*/}
                    <input placeholder="ASIN" className="input" name="productInformation.asin" value={bookDetail.productInformation.asin} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>Publisher </label>*/}
                    <input placeholder="Publish" className="input" name="productInformation.publisher" value={bookDetail.productInformation.publisher} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>Language </label>*/}
                    <input placeholder="Language" className="input" name="productInformation.language" value={bookDetail.productInformation.language} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>Book Type </label>*/}
                    <input placeholder="Book Type" className="input" name="productInformation.bookCoverType" value={bookDetail.productInformation.bookCoverType} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>ISBN 10 </label>*/}
                    <input placeholder="ISBN 10" className="input" name="productInformation.isbn_10" value={bookDetail.productInformation.isbn_10} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>ISBN 13 </label>*/}
                    <input placeholder="ISBN 13" className="input" name="productInformation.isbn_13" value={bookDetail.productInformation.isbn_13} type="text" onChange={handleChange} />
                    <br/>

                    {/*<label>Item Weight </label>*/}
                    <input placeholder="Item Weight" type="number" className="input" name="productInformation.itemWeight" value={bookDetail.productInformation.itemWeight} onChange={handleChange} />
                    <br/>

                    {/*<label>Dimension </label>*/}
                    <input placeholder="Dimension" className="input" name="productInformation.dimensions" value={bookDetail.productInformation.dimensions} type="text" onChange={handleChange} />
                    <br/>
                    <br/>

                    <button className="btn btn-post">
                        Post New Book Details
                    </button>

                    <br/>
                    <br/>
                {/*</fieldset>*/}
            </form>
            <br/>
            <br/>
        </div>
    );
}
export default PostNewBookDetail;