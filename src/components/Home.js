import React, { Component } from 'react';

class Home extends Component
{
    constructor(props) {
        super(props);
        this.firsttabref =React.createRef();

    }
    componentDidMount()
    {
        this.firsttabref.current.click(); //to gete reference of 1s tab
    }


    openTab(tabName, event)
    {
        
        var i, tabcontent, tablinks;

        // Get all elements with className="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
 
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with className="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activetab", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        if (event) {
            event.currentTarget.className += " activetab";
        }
        document.getElementById(tabName).style.display = "block";
       
        console.log(event.target);
    
    }
    

   

    render()
    {
       
        return (
            <>
                <div className="container">
                    <div className="row">
                         <div className="col-md-12">
                            <h3 className="billheading">Airway Bill number</h3>
                            <h4 className="biillnumber">56538292</h4>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="margin-area">
                                <div className="statusicon one"><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                                <div className="statusicon two"><i className="fa fa-truck" aria-hidden="true"></i></div>
                                <div className="statusicon three"><i className="fa fa-check-square-o" aria-hidden="true"></i></div>
                                <div className="progress-bar"> </div>
                                <div className="message1"> <span>Ready for shipment</span></div>
                                <div className="message2"> <span>In Transit</span></div>
                            </div>

                                                   
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab">
                                <button className="tablinks" id="defaultOpen" onClick={this.openTab.bind(this, 'Shipment_status')} ref={this.firsttabref}>Shipment Status</button>
                                <button className="tablinks" onClick={this.openTab.bind(this, 'Shipment_scan')}>Shipment Shipment scan</button>
                                <button className="tablinks" onClick={this.openTab.bind(this, 'Shipment_items')}>Shipment Items</button>
                            </div>

                            <div id="Shipment_status" className="tabcontent cardview" >
                                 <div className="row">
                                    <div className="col-md-12">

                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td>Shipment delivered:
                                                            <div className="lighttext"> Raipur pud</div>
                                                        </td>
                                                        <td className="lighttext right">March 23 2019 at  02:25 am</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipment out fo Delivery
                                                             <div className="lighttext"> Raipur pud</div>
                                                        </td>
                                                        <td className="lighttext right">March 23 2019 at  02:25 am </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paper work inscan
                                                             <div className="lighttext"> Raipur pud</div>
                                                        </td>
                                                        <td className="lighttext right">March 23 2019 at  02:25 am</td>
                                                    </tr>
                                                    <tr >
                                                        <td >Shipment arrived
                                                             <div className="lighttext"> Raipur pud
                                                             </div>
                                                        </td>
                                                        <td className="lighttext right">March 23 2019 at  02:25 am</td>
                                                    </tr>
                                                    <tr>
                                                        <td >Security cleared
                                                             <div className="lighttext"> Raipur pud
                                                            </div>
                                                        </td>
                                                        <td className="lighttext right">March 23 2019 at  02:25 am</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="Shipment_scan" className="tabcontent cardview" >
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td>Address scan:
                                                            <div className="lighttext"> Optional</div>
                                                        </td>
                                                        <td className="lighttext right"><i className="fa fa-times" aria-hidden="true"></i> {'\u00A0'} Cancelled</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping label scan
                                                             <div className="lighttext">Mandate</div>
                                                        </td>
                                                        <td className="lighttext right"><i className="fa fa-check-circle" aria-hidden="true"></i> {'\u00A0'}  Done</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Invoivce scan
                                                             <div className="lighttext"> Mandate</div>
                                                        </td>
                                                        <td className="lighttext right"><i className="fa fa-check-circle" aria-hidden="true"></i> {'\u00A0'}  Done</td>
                                                    </tr>
                                                    <tr >
                                                        <td >Barcode scan
                                                             <div className="lighttext"> Mandate
                                                             </div>
                                                        </td>
                                                        <td className="lighttext right"><i className="fa fa-check-circle" aria-hidden="true"></i> {'\u00A0'} Done</td>
                                                    </tr>
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Shipment_items" className="tabcontent cardview" >
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <tbody>
                                                    <tr>
                                                        <td>American tourister baggage:
                                                            <div className="lighttext"> 1 pc</div>
                                                        </td>
                                                        <td className="lighttext right">Rs 3520</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Intex powerbank
                                                             <div className="lighttext">1 pc</div>
                                                        </td>
                                                        <td className="lighttext right">Rs 799</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Addidas trek shoes
                                                             <div className="lighttext"> 1 pair</div>
                                                        </td>
                                                        <td className="lighttext right">Rs 2000</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <footer>
                        <p>Made by: Dhiren singh Copyright &copy; 2019 React Assignment, Banglore, India</p>
                        <p>Contact information: <a href="mailto:dhirendrapratapsingh398@gmail.com">dhirendrapratapsingh398@gmail.com</a>.</p>
                        <ul className="footer">
                            <li><a href="#" title="">Privacy</a></li>
                            <li>|</li>
                            <li><a href="#" title="">Legal</a></li>
                            <li>|</li>
                            <li><a href="#" title="">Terms of use</a></li>
                            <li>|</li>
                            <li><a href="#" title="">Contact</a></li>
                        </ul>
                    </footer>

                        
                </div>
            </> /* Fragments prevent creatio of extra nodes */
        )
    }
}


export default Home;
