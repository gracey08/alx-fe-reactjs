import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
    return (
        <div>
            <h2>Blog Post</h2>
            <p>Viewing Blog Post ID: {id}</p>
        </div>
    );
}

export default BlogPost;