import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import sunflower from '../sunflower.png' /* .. to go one step back */


/* Since Placeholder isOnline REST API for Testing and Prototyping 
it doesnt change the data on the server but it appears like*/

class PostList extends Component
{
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
    }
    render() {
        const { posts } = this.state
        const postList =
        posts.length ?
        (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={sunflower} alt="A Pokeball" className="App-logo"  />
                        <div className="card-content">
                            <Link to={'/PostList/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : 
        (   /* by the time post gets loaded show this */
            <div className="center">No posts to show its Loading</div> 
        );

        return (
            <div>
                <div className="container">
                    <div className="row" style={{ marginTop: '20px' }}>
                        <h4 className="ListHeading">PostList</h4>
                </div>
                    {postList}
                </div>
            </div>
        )
    }
}

export default PostList