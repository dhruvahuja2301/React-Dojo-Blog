import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("https://react-dojo-blog-json-server.herokuapp.com/blogs");

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs!!"}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==="Dhruv" )} title={"Dhruv's Blogs!!"} /> */}
        </div>
    );
}
 
export default Home;