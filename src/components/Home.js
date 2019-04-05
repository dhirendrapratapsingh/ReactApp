import React, { Component } from 'react';
import axios from 'axios';
import Looader from './Loader';
import Modal from './Modal';



/* Since Placeholder isOnline REST API for Testing and Prototyping
it doesnt change the data on the server but it appears like it*/

class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            CardItems: [],
            currentpostid : null,
            cardTitle: 'My New card',
            albumId: 'xxxx',
            imageUrl: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-kittens-wallpapers.jpg',
        };
        this.modelChildtRef = React.createRef(); //used to get refernce of child component
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(res => {
                console.log(res);
                this.setState({
                    CardItems: res.data.slice(0, 20)
                });
            })

        console.log(this.modelChildtRef);
    }
    

    openInNewTab(link,e)
    {
        window.open(link, "new tab");
    }

    DeleteCard(id)
    {
        var l = document.getElementsByClassName('Loader');
        var cntnr = document.getElementsByClassName('container');
        l[0].style.display = 'block' ;  //every API requeest should have loaders for better User Experience
        cntnr[1].style.opacity = '0.5';  //Little transition to show delete effect
        console.log(cntnr);
        
        
        axios.delete('https://jsonplaceholder.typicode.com/photos/'+id)
            .then(res => 
            {
                console.log('delete successful');
                l[0].style.display = 'none';
                cntnr[1].style.opacity = '1'; 
                
                this.setState(previousState => {
                    return {
                        CardItems: previousState.CardItems.filter(item => item.id !== id)
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    SaveCard()
    {
        var l = document.getElementsByClassName('Loader');
        var cntnr = document.getElementsByClassName('container');
        l[0].style.display = 'block';  //every API requeest should have loaders for better User Experience
        cntnr[1].style.opacity = '0.5';  //Little transition to show delete effect
        
        var ob = {};
        ob.id = Math.floor(Math.random() * 1000 + 1); //genererate a random id
        ob.thumbnailUrl = this.state.imageUrl;
        ob.title = this.state.cardTitle;
        ob.albumId = this.state.albumId;
        ob.url = this.state.imageUrl;
        console.log(ob);


        axios.post('https://jsonplaceholder.typicode.com/photos/',ob)
            .then(res => {
                
                console.log('Save successful');
                l[0].style.display = 'none';
                cntnr[1].style.opacity = '1';

                
                var copy = this.state.CardItems;
                copy.unshift(ob)
                

                this.setState(previousState => {
                    return {
                        CardItems: copy
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleInputChange = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name] : value
        })
    }

    
    updateId(id)
    {
        console.log('to be deleted'+id);   
        this.setState({ currentpostid: id })
    }

    render()
    {
        const { CardItems } = this.state;

        const CardList =
            CardItems.length ?
                (
                    CardItems.map(post => {
                        return (
                            <div className="col-md-4 col-sm-6" key={post.id}>
                                <div className="mycard" >

                                    <div className="row">
                                        <div style={{ float: 'right' }} data-toggle="modal" data-target="#DeleteCard" onClick={this.updateId.bind(this,post.id)}>
                                            <em className="fa fa-trash delIcon" title="Delete"></em>                 
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="center">
                                            <img className="avtar" src={post.thumbnailUrl} alt="Card Image" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="title">
                                            <label className="title">{post.title}</label>
                                        </div>
                                    </div>

                                    <div className="row" id="metricrow">
                                        <label className="center width40" >
                                            <span className="metrics"><i className="fa fa-file-image-o"> </i> {'\u00A0'} Album {'\u00A0'} {post.albumId}</span>
                                        </label>

                                        <label className="center width40">
                                            <span onClick={this.openInNewTab.bind(this, post.url)} ><span className="metrics" ><i className="fa fa-window-maximize"></i> {'\u00A0'}  View Full Size </span></span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
                ) :
                ( 
                    <Looader />   /* by the time post gets loaded show this */
                );

        

        return (
            <>
                <div className="container">
                    <div className="row">
                        <h4 className="ListHeading">Card List</h4>
                    </div>
                    <div className="row">
                        {CardList}
                    </div>
                    <div className="Loader">
                        <Looader />
                    </div>
                    <div id="mybutton" data-target="#AddCard" data-toggle="modal">
                        <i className="fa fa-plus-circle addCard" aria-hidden="true"></i>
                    </div>

                    {/* Code reuse: Passing method & string as prop to Child component Modal */}

                    <Modal title="Are you sure you want to delete this Card" action={this.DeleteCard.bind(this, this.state.currentpostid)} actionName="Yes" id="DeleteCard" />

                    <Modal title="Add new Card to you collection" action={this.SaveCard.bind(this)} actionName="Save" id="AddCard">
                        <div id="form" className="">
                        
                            <form name="AddcardForm" >
                                <div className="row">
                                    Enter Title :<input type="text" name="cardTitle" value={this.state.cardTitle} onChange={this.handleInputChange} className="form-control" />
                                </div>
                                <div className="row">
                                    Album Id :<input type="text" name="albumId" value={this.state.albumId} onChange={this.handleInputChange} className="form-control" />
                                </div>
                                <div className="row">
                                    Image Url  :<input type="url" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} className="form-control" placeholder="Please enter a valid image url" />
                                </div>
                                
                            </form>
                        </div>
                    </Modal>
                    
                </div>
            </> /* Fragments prevent creatio of extra nodes */
        )
    }
}


export default Home;
