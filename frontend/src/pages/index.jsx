import {Link} from "react-router-dom";

export function Index() {
  return (
    <div>
      <div>
        <Link to="/create">Create Blog Post</Link>
      </div>
      <div>
        <Link to="/view">My Blogs</Link>
      </div>
    </div>
  );
}
