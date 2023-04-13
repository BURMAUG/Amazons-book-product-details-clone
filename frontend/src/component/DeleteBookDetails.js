const DeleteBookDetails = ({bookID, onDelete}) =>{
    const handleClick = () =>
           fetch(`http://localhost:8080/api/amazon-book-details/v1/${bookID}`, {
               method: 'DELETE',
           })
               .then(res =>{
                   if (res === res.ok){
                       onDelete(bookID)
                   }
               }).catch(console.error);

    return(
        <>
            <div>
               <button onClick={handleClick} title={bookID} >Delete</button>
            </div>
        </>
    )
}
export default DeleteBookDetails;