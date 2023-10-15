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
      <h1 className="title">{title}</h1>

      {isLoading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <div className="booklist">
          {books?.map((book) => (
            <div key={book.rank}>
              <img src={book.book_image} className="bookImg" />
              <h4 className="bookTitle">{book.title}</h4>
              <h5 className="bookAuthor">{book.author}</h5>
              <a
                href={book.amazon_product_url}
                target="_blank"
                className="buynow"
              >
                BUY NOW &rarr;
              </a>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .booklist {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
          padding: 20px 0;
        }
        .bookImg {
          width: 100%;
        }
        .bookTitle {
          font-size: 35px;
          line-height: 1.1em;
        }
        .bookAuthor {
          font-size: 25px;
          padding-bottom: 10px;
        }
        .buynow {
          font-size: 20px;
          color: #fff;
          background-color: #000;
          padding: 7px 15px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
