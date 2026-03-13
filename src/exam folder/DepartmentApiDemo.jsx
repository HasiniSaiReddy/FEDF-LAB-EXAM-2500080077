import { useEffect, useState } from "react";
import axios from "axios";

function DepartmentApiDemo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => {
        setData(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="page">
      <h2 style={{ color: "blue" }}>API Demo</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Comments</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.comment_count}</td>
              <td>
                <a href={post.link} target="_blank">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentApiDemo;
