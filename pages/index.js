import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`https://books-api.nomadcoders.workers.dev/lists`).then((response) =>
      response.json().then((json) => {
        setLists(json.results);
        setIsLoading(false);
      })
    );
  }, [lists]);

  return (
    <div className="container">
      <h1 className="title">The NewYork Times Best Seller Explorer</h1>

      {isLoading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <>
          <h3 className="lists_title">● BEST SELLER CATEGORY</h3>
          <ul className="lists">
            {lists.map((list) => (
              <li key={list.list_name} className="list">
                <Link href={`/list/${list.list_name_encoded}`}>
                  <a>{list.list_name} &rarr;</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
