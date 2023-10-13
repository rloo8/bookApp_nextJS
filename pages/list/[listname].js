import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function bookList() {
  const router = useRouter();
  const title = router.query.listname;

  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://books-api.nomadcoders.workers.dev/list?name=${title}`).then(
      (response) =>
        response.json().then((json) => {
          setBooks(json.results.books);
          setIsLoading(false);
        })
    );
  }, [title]);

  return (
    <div className="container">
      <h2>{title}</h2>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        books?.map((book) => (
          <div key={book.rank}>
            <img src={book.book_image} />
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <a href={book.amazon_product_url} target="_blank">
              Buy now &rarr;
            </a>
          </div>
        ))
      )}
    </div>
  );
}
