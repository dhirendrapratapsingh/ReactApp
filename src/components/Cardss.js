import React, { Component } from 'react';
import axios from 'axios';
import Looader from './Loader';
import Modal from './Modal';
import { Link } from "react-router-dom";


/* Since Placeholder isOnline REST API for Testing and Prototyping
it doesnt change the data on the server but it appears like it*/

class Cardss extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            CardItems: [],
            currentpostid : null,
            cardTitle: 'My New card',
            albumId: 'xxxx',
            imageUrl: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-kittens-wallpapers.jpg',
            CardItemsCopy: [],
            showemptyMessage : false,
            showLoader : false,
            order : 'none'
        };
        //this.modelChildtRef = React.createRef(); used to get refernce of child component
    }

    componentDidMount()
    {
        this.setState({ 'showLoader': true }); //every API requeest should have loaders for better User Experience
        axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(res => {
                console.log(res);

                this.setState({
                    CardItems: res.data.slice(0, 20),
                    CardItemsCopy: res.data.slice(0, 20),
                    'showLoader': false
                });
            })
    }
    

    DeleteCard(id)
    {
        this.setState({ 'showLoader': true }); 
        var cntnr = document.getElementsByClassName('container');
        cntnr[1].style.opacity = '0.5';  //Little transition to show delete effect
        console.log(cntnr);
        
        
        axios.delete('https://jsonplaceholder.typicode.com/photos/'+id)
            .then(res => 
            {
                console.log('delete successful');
                this.setState({ 'showLoader': false });
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
        
        this.setState({ 'showLoader': true }); 
        var cntnr = document.getElementsByClassName('container');  
        cntnr[1].style.opacity = '0.5'; 
        
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
                this.setState({ 'showLoader': false });
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


    filterCards = (event) =>
    {
        console.log(event.target.value + ' , ' + this.state.CardItems.length);
        
        var updatedList = [];
        if (event.target.value.length > 0)
        {
            updatedList = this.state.CardItemsCopy.filter(function (item) {
                return item.title.toLowerCase().startsWith(event.target.value.toLowerCase())
            });

            if (updatedList.length <= 0){
                this.setState({ 'showemptyMessage': true,
                                showLoader : false});
            }
            else{
                this.setState({ 'showemptyMessage': false });
            }

            this.setState({ CardItems: updatedList });
        }
        else
        {
            this.setState({ CardItems: this.state.CardItemsCopy,
                            'showemptyMessage': false  });
        }
    }

    sortList = (event) =>
    {
        console.log(event.target.value + ' , ' + this.state.CardItems.length);

        var updatedList = [];
        if (this.state.order === 'none')
        {
            updatedList = this.state.CardItems.sort(function (itemN, itemN_1)
            {
                var itemN_TITLE = itemN.title.toUpperCase(); // ignore upper and lowercase
                var itemN_1_TITLE = itemN_1.title.toUpperCase();
                if (itemN_TITLE < itemN_1_TITLE) {
                    return -1;
                }
                if (itemN_TITLE > itemN_1_TITLE) {
                    return 1;
                }
                // names must be equal
                return 0;
            });

            this.setState({ CardItems: updatedList,
                            order : 'ascending'});
        }
        else if (this.state.order === 'ascending')
        {
            updatedList = this.state.CardItems.sort(function (itemN, itemN_1) {
                var itemN_TITLE = itemN.title.toUpperCase(); // ignore upper and lowercase
                var itemN_1_TITLE = itemN_1.title.toUpperCase();
                if (itemN_TITLE > itemN_1_TITLE) {
                    return -1;
                }
                if (itemN_TITLE < itemN_1_TITLE) {
                    return 1;
                }
                return 0;
            });

            this.setState({
                CardItems: updatedList,
                order: 'descending'
            });
        }
        else if (this.state.order === 'descending')
        {
            this.setState({
                CardItems: this.state.CardItemsCopy,
                order: 'none'
            }); // cards arranged to its default order
        }
        
    }

    

    handleInputChange = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name] : value
        })
    }
    

    openInNewTab(link, e) {
        window.open(link, "new tab");
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

                                    <Link to={'/cards/' + post.id}>

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
                                        
                                    </Link>
                                    

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
                   null   
                );

        

        return (
            <>
                <div className="container">
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="col-md-3 col-sm-3">
                            <h3 className="ListHeading">Card List</h3>
                            <i style={{ 'display': this.state.order === 'none' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort sortList" aria-hidden="true" title="click to sort list in ascending"></i>
                            <i style={{ 'display': this.state.order === 'ascending' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort-asc sortList" aria-hidden="true" title="click to sort list in descending"></i>
                            <i style={{ 'display': this.state.order === 'descending' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort-desc sortList" aria-hidden="true" title="Back to default order"></i>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <input type="search" className="form-control" id="search" placeholder="search card title" onChange={this.filterCards}/> 
                        </div>
                        
                    </div>

                        
                    <div className="row">{CardList}</div>

                    <div className="Loader" style={{ 'display': this.state.showLoader ? 'block' : 'none' }}>
                        <Looader /> {/* by the time post gets loaded show this */}
                    </div>

                    <div className="EmptyList" style={{'display': this.state.showemptyMessage? 'block':'none'}}>
                        <h3 >No such item found in list </h3>
                    </div>

                    <div id="addbutton" data-target="#AddCard" data-toggle="modal">
                        <i className="fa fa-plus-circle addCard" aria-hidden="true"></i>
                    </div>

                    {/* Code reuse: Passing method & strings as prop to Child component Modal */}

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
                                    Image Url  :<input type="url" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} className="form-control" placeholder="Enter url" describedby="helpertext" />
                                        <span id="helpertext" className="help-block">Please enter a valid image url</span>
                                </div>
                                
                            </form>
                        </div>
                    </Modal>
                    
                </div>
            </> /* Fragments prevent creatio of extra nodes */
        )
    }
}

export default Cardss;
