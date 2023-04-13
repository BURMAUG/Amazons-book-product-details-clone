const API = 'http://localhost:8080/api/amazon-book-details/v1';

class BookPostService {
    postNewBookDetails(book){
        return fetch(API, {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(book)
        });
    }
}
export default new BookPostService();