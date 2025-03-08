import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
    const [showPosts, setShowPosts] = useState(true);

    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ padding: '20px' }}>
                <h1>React Query Demo</h1>
                <button onClick={() => setShowPosts(!showPosts)}>
                    {showPosts ? 'Hide Posts' : 'Show Posts'}
                </button>
                {showPosts && <PostsComponent />}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;