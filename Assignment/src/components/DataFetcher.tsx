import React from "react";
import useFetch from "../customhooks/useFetch";

interface Data {
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const { data, loading, error } = useFetch<Data[]>(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" mt-6 ">
      <h1 className="font-semibold text-lg">Fetched Data:</h1>
      <div className="flex justify-center mt-2">
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              <div className="flex  gap-3">
                <span className="font-medium">{item.id}</span>
                <span className="text-gray-800">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetcher;
