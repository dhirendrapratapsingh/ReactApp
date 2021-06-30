import React, { Component } from 'react';
import axios from 'axios';
//import $ from 'jquery';
import Looader from './Loader';
import Modal from './Modal';
import { Link } from "react-router-dom";
//import { fetchCardList } from "../actions/actionsindex"; used if making ASYNC call via redux-thunk

import {connect} from 'react-redux' //  a FUNCTION() which returns HOC using which we connect this component to redux Store


/* Since Placeholder isOnline REST API for Testing and Prototyping
it doesnt change the data on the server but it appears like it has*/

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
            order : 'none',
            getDerivedStateFromPropsCall : true,
            offset : 21
        };

        this.onscrollFunction = this.onscrollFunction.bind(this);
        //This LOC Iis important to clear the event listeners on unmount. Unbinding can only happen after binding 

    }


    componentDidMount()
    {
        this.setState({ 'showLoader': true }); //every API requeest should have loaders for better User Experience
        axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(res => {
                console.log(res);

                this.props.getCardList(res.data);

                this.setState({
                    'showLoader': false
                });
            })

        //PAGINATION CODE getMoreCards


        this.optimizedFetch = throttle(this.getMoreCards, 2000);
        
        window.addEventListener('scroll', this.onscrollFunction,false) ;

    }

    getMoreCards = (offset) => {

        this.props.getMoreCards(offset);
        this.setState((prevState)=>({'offset': prevState.offset+9}) );

    }

    onscrollFunction =  (event)=> {
        var currentScrollPosition = event.target.scrollingElement.scrollTop;

        if (currentScrollPosition >= document.body.clientHeight-window.innerHeight-500) { 
            //500px before scroll reaches end of documnet, concatenate new cards
            console.log("get more cards");
            this.optimizedFetch(this.state.offset);
            
        }
   
    }

    componentWillUnmount(){ //Clear scroll listener to avoid memory leak
        
        window.removeEventListener('scroll',this.onscrollFunction,false);

    }
  
    static getDerivedStateFromProps(nextprops, state) // called on mount & all updates
    {
       // console.log('getDerivedStateFromProps'); cant use 'this' here
   
        if (nextprops.CardItems.length !== state.CardItems.length && state.getDerivedStateFromPropsCall) {
            console.log('Initial local state manipualted via redux store');
            
            return {    
                CardItems: nextprops.CardItems,
                CardItemsCopy: nextprops.CardItemsCopy,
            };
        }
        else if (nextprops.allowLocalStateManipulation )
        {
            console.log('local state manipualted via Redux store');
            nextprops.AllowManipulationFromReux(false); // to prevent redux from affecting local state manipulation ie: sort,delete etc

            return {
                CardItems: nextprops.CardItems,
            };
            
        }
        else
        {
            return null; // Return null if the state hasn't changed
        }
        
    }




    DeleteCard(id)
    {
        this.setState({ 'showLoader': true });
        var cntnr = document.getElementsByClassName('container');
        cntnr[1].style.opacity = '0.5';  //Little transition to show delete effect
        //console.log(cntnr);

        axios.delete('https://jsonplaceholder.typicode.com/photos/' + id)
            .then(res => {
                console.log('delete successful');
                this.setState({ 'showLoader': false });
                cntnr[1].style.opacity = '1';

                this.props.deleteCard(id);

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


                this.props.AddCard(ob);

            })
            .catch(err => {
                console.log(err);
            });
    }

    OpenUpdateCard(id)
    {
        console.log('to be Edited' + id);

        var cardToBeUpdated = (this.state.CardItems.filter(item => item.id === id))[0]
        console.log(cardToBeUpdated);

        this.setState({ currentpostid: id ,
            imageUrl: cardToBeUpdated.thumbnailUrl,
            cardTitle: cardToBeUpdated.title,
            albumId: cardToBeUpdated.albumId,
            url: cardToBeUpdated.url
        })

    }

    UpdateCard()
    {
        this.setState({ 'showLoader': true });
        var cntnr = document.getElementsByClassName('container');
        cntnr[1].style.opacity = '0.5';

        var ob = {};
        ob.id = this.state.currentpostid;
        ob.thumbnailUrl = this.state.imageUrl;
        ob.title = this.state.cardTitle;
        ob.albumId = this.state.albumId;
        ob.url = this.state.imageUrl;
        console.log(ob);


        axios.put('https://jsonplaceholder.typicode.com/photos/' + this.state.currentpostid, ob)
            .then(res => {

                console.log('Update successful');
                this.setState({ 'showLoader': false });
                cntnr[1].style.opacity = '1';

                this.props.UpdateCard(ob);

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
            //console.log(updatedList);

            this.setState({ CardItems: updatedList, getDerivedStateFromPropsCall : false});
        }
        else
        {
            this.setState({ CardItems: this.state.CardItemsCopy,
                            'showemptyMessage': false  });
        }
    }

    sortList = (event) =>
    {
        console.log(this.state.order);

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
        this.setState({ getDerivedStateFromPropsCall: false });
        
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
        //console.log(this.props);
        //console.log(this.state);
        
        const { CardItems } = this.state;

        const CardList =
            CardItems.length ?
                (
                    CardItems.map(post => {
                        return (
                            <div className="col-md-4 col-sm-6" key={post.id}>
                                <div className="mycard" >

                                    <div className="row">
                                        <div style={{ float: 'left' }} data-toggle="modal" data-target="#DeleteCard" onClick={this.updateId.bind(this,post.id)}>
                                            <em className="fa fa-trash myIcon" title="Delete"></em>                 
                                        </div>
                                        <div style={{ float: 'right' }} data-toggle="modal" data-target="#EditCard" onClick={this.OpenUpdateCard.bind(this, post.id)}>
                                            <em className="fa fa-pencil myIcon" title="Edit"></em>
                                        </div>
                                    </div>

                                    <Link to={'/cards/' + post.id}>

                                        <div className="row">
                                            <div className="center">
                                                <img className="avtar" src={post.thumbnailUrl} alt="Card " />
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
                                            <span onClick={this.openInNewTab.bind(this, post.thumbnailUrl)} className="metrics"><i className="fa fa-file-image-o"> </i> {'\u00A0'} Album {'\u00A0'} {post.albumId}</span>
                                        </label>

                                        <label className="center width40">
                                            <span onClick={this.openInNewTab.bind(this, post.url)} className="metrics" ><i className="fa fa-window-maximize"></i> {'\u00A0'}  View Full Size </span>
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
                    <div className="row" >
                        <div className="col-md-3 col-sm-3">
                            <h3 className="ListHeading" >Card List</h3>
                            <i style={{ 'display': this.state.order === 'none' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort sortList" aria-hidden="true" title="click to sort list in ascending"></i>
                            <i style={{ 'display': this.state.order === 'ascending' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort-asc sortList" aria-hidden="true" title="click to sort list in descending"></i>
                            <i style={{ 'display': this.state.order === 'descending' ? 'block' : 'none' }} onClick={this.sortList} className="fa fa-sort-desc sortList" aria-hidden="true" title="Back to original List"></i>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <input type="search" className="form-control" id="search" placeholder="search card title" onChange={this.filterCards}/> 
                        </div>     
                    </div>

                    <div className="row" id="content">{CardList}</div>

                    <div className="Loader" style={{ 'display': this.state.showLoader ? 'block' : 'none' }}>
                        <Looader /> {/* by the time cards gets loaded show this */}
                    </div>

                    <div className="EmptyList" style={{'display': this.state.showemptyMessage ? 'block':'none'}}>
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
                    <Modal title="Update Card to wish to" action={this.UpdateCard.bind(this)} actionName="Save" id="EditCard">
                        <div id="form" className="">

                            <form name="AddcardForm" >
                                <div className="row">
                                    Enter Title :<input type="text" name="cardTitle" value={this.state.cardTitle} onChange={this.handleInputChange} className="form-control" />
                                </div>
                                <div className="row">
                                    Album Id :<input type="text" name="albumId" value={this.state.albumId} onChange={this.handleInputChange} className="form-control" />
                                </div>
                                <div className="row">
                                    Image Url  :<input type="url" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} className="form-control" placeholder="Enter valid url" describedby="helpertext" />
                                </div>

                            </form>
                        </div>
                    </Modal>
                    
                </div>
            </> /* Fragments prevent creation of extra nodes */
        )
    }
}

//outside class component we write function which takes state from Store & maps it to
//props of current component, it returns a object having properties which we want to add to props
//defines what data we need to take from redux while connecting. any time the store is updated, mapStateToProps is called

const mapStateToProps = (Storestate, ownProps) =>
{
    console.log('BELOW 2 FROM mapStateToProps');
    console.log(Storestate);
    console.log(ownProps);
    
    return Storestate; // redux state is mapped to this.props of current Component
}

//this is used to dispatch a action to reducer for manipulation of store 
const mapDispatchToProps = (dispatch) => 
{
    //Methods are mapped to props & dispatch action whenever called
    return {
       
        getCardList: (listdata) => 
        {
            dispatch({ type: 'GET_CARDS', payload: listdata });
        },
        AddCard: (data) => {
            dispatch({ type: 'ADD_CARD', payload: data });
        },
        deleteCard: (id) => {
            dispatch({ type: 'DELETE_CARD', payload: id });
        },
        UpdateCard: (data) => {
            dispatch({ type: 'UPDATE_CARD', payload: data });
        },
        AllowManipulationFromReux: (bool) => {
            dispatch({ type: 'ALLOW_MANIPULATION', payload: bool });
        },
        getMoreCards: (offset) => {
            dispatch({ type: 'GET_MORE_CARDS', payload: offset });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cardss); //{ fetchCardList }


function throttle(fn,delay){

    var shouldUpdate = true, context, args;
    return function(){
        context = this;
        args = arguments;
        if(shouldUpdate){
            fn.apply(context,args);
            shouldUpdate = false;
            setTimeout(()=>{
                console.log('expensive function called');
                shouldUpdate = true;
            },delay);
        }

    }
    
}

//these methods were used if no redux

/*  componentDidMount()
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

        //this.props.fetchCardList();
        //dispatch this action creator after mounting:
        //calls render after store list is mapped to props  & each render calls getDerivedStateFromProps


    }  */
/* DeleteCard(id)
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
    } */

/* SaveCard()
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


    axios.post('https://jsonplaceholder.typicode.com/photos/', ob)
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
} */