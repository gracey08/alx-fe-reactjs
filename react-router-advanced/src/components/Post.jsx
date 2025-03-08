import { useParams } from 'react-router-dom';

function Post() {
    const { postId } = useParams();
    return (
        <div>
            <h2>Post Page</h2>
            <p>Viewing Post ID: {postId}</p>
        </div>
    );
}

export default Post;