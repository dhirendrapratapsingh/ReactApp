import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-root');


class Modal extends Component 
{
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        //console.log(modalRoot);
        this.modelChildRef = React.createRef();
        
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, 
        modalRoot.appendChild(this.el);
        console.log(this.props);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    closeModel(e) {
        console.log(e);
        this.refs.closeRef.click();
    }

    render()
    {
        const { title, action, actionName, id } = this.props; //Destructuring props

       
        const RefModal = <div className="modal fade" id={id} role="dialog" aria-hidden="true" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <button type="button" ref="closeRef" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 className="modal-title" id="modalLabel"> {title}</h4>
                                    </div>

                                    <div className="modal-body" style={{'display' : this.props.children ? 'block' : 'none' }}>{this.props.children}</div>

                                    <div className="modal-footer row">
                                        <div className="col-md-6 ">
                                            <button type="button" className="btn btn-secondary right" data-dismiss="modal">Close</button>
                                        </div>
                                    <div className="col-md-6" onClick={this.closeModel.bind(this)}>
                                            <button type="button" className="btn btn-primary left" onClick={action}>{actionName}</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
             
     
        return ReactDOM.createPortal(
            <>
            {RefModal}
            </>,
            this.el,
        );
        
    }
}


export default Modal;


