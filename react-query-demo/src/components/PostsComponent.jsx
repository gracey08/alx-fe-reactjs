import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

function PostsComponent() {
    const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} disabled={isFetching}>
                {isFetching ? 'Refetching...' : 'Refetch Posts'}
            </button>
            {isLoading ? (
                <div>Loading posts...</div>
            ) : isError ? (
                <div>Error fetching posts: {error.message}</div>
            ) : (
                <>
                    <p>{isFetching ? 'Updating...' : 'Data loaded (check cache in DevTools)'}</p>
                    <ul>
                        {data.slice(0, 10).map((post) => (
                            <li key={post.id}>
                                <strong>{post.title}</strong>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default PostsComponent;