import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams(); 
    const { data: blog, isPending, error } = useFetch(`https://my-json-server.typicode.com/dhruvahuja2301/react-dojo-blog-json-server/blogs/${id}`);
    const history = useHistory();

    const deleteBlog = () => {
        fetch(`https://my-json-server.typicode.com/dhruvahuja2301/react-dojo-blog-json-server/blogs${id}`,{
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return (  
        <div>
            {/* <h1>Blog Details of ID: { id }</h1> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blog && (
                <div className="blog-details">
                    <article>
                        <h2>{blog.title}</h2>
                        <h4> - Written by {blog.author}</h4>
                        <div>{blog.body}</div>
                    </article><br/>
                    <div className="links">
                        <Link className="pink-hover" to="/">Back to All Blogs </Link>
                        <button onClick={deleteBlog}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;