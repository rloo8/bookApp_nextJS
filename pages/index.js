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
      <h1>The NewYork Times Best Seller Explorer</h1>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.list_name}>
              <Link href={`/list/${list.list_name_encoded}`}>
                {list.list_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
