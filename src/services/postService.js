import React, { Component } from 'react';
import {accessToken} from '../env'

class PostService extends Component{

    getPosts = async ({page}) => {
        let url = "https://gorest.co.in/public-api/posts?access-token="+accessToken+"&page="+page
        let response = await fetch(url)
        response = await response.json()
        return response
    }

}


export default PostService