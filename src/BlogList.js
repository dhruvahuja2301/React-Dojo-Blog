import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    
    return (  
        <div>
            <h2>{ title }</h2>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`blogs/${blog.id}`}>
                            <h3>{ blog.title }</h3>
                            <p>Written by { blog.author } </p>
                            {/* <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button> */}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default BlogList;