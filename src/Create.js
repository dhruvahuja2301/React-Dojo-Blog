import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body }
        
        setIsPending(true);
        
        fetch('https://react-dojo-blog-json-server.herokuapp.com/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push("/");
        });
    }

    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            {/* <form action="https://react-dojo-blog-json-server.herokuapp.com/blogs" method="POST"> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"
                    required value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author Name</label>
                {/* <select name="author" id="author"
                    required value={author} onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Dhruv">Dhruv</option>
                    <option value="Bhavesh">Bhavesh</option>
                    <option value="Ruben">Ruben</option>
                </select> */}
                <input type="text" name="author" id="author"
                    required value={author} onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="body">Content</label>
                <textarea name="body" id="body"
                    required value={body} onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button type="submit" disabled>Adding Blog...</button>}
            </form>
            {/* <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p> */}
        </div>
    );
}
 
export default Create;