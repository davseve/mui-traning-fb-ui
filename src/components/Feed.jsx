import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchPosts } from './dataProvider';
import Post from "./Post";

function Feed() {
    const [posts, setPosts] = useState( [] );

    useEffect( () => {
        fetchPosts.then( posts => {
            setPosts( posts );
        } ).catch( error => {
            console.error( 'Error fetching posts:', error );
        } );
    }, [] );

    return (<Box flex={ 4 } p={ 2 }>
        { posts && posts.map( ( post ) => (<Post post={ post }/>) ) }
    </Box>)
}

export default Feed;