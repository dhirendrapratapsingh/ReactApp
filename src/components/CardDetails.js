import React, { Component } from 'react'
import axios from 'axios'
import Looader from './Loader';

class cardDetails extends Component
{
    state = {
        cardDetails: null
    }

    componentDidMount()
    {
        let id = this.props.match.params.photo_id; /* Params obtained from props */
        console.log(this.props);

        axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
        .then(res => {
                this.setState({
                    cardDetails: res.data
                });
                console.log(res.data);
            });
    }

    openInNewTab(link, e) {
        window.open(link, "new tab");
    }

    render() {
        const cardDetails = this.state.cardDetails ?
            (
                <div className="mycard">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h1 className="panel-title">Card details</h1>
                        </div>
                        <div className="panel-body">
                   
                            <div className="row" onClick={this.openInNewTab.bind(this, this.state.cardDetails.thumbnailUrl)}>
                                <div className="center">
                                    <img className="avtar" src={this.state.cardDetails.thumbnailUrl} alt="Card " />
                                </div>
                            </div>
                            <div className="row" >
                                {this.state.cardDetails.title}
                                {/* <label className="title"> {this.state.cardDetails.title}</label> */}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="title">Card number : {this.state.cardDetails.id}</label>
                                </div>
                                <div className="col-md-6">
                                    <label className="title">Album number : {this.state.cardDetails.albumId}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : 
            (
                <div className="EmptyList">
                    <Looader />Loading card details...
                </div>
            );

        return (
            <div className="container">
                {cardDetails}
            </div>
        )
    }
}

export default cardDetails