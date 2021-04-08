import React, { Component } from 'react';
import '../../css/ContactUs.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import GoogleMap from '../Home/GoogleMap';


class ContactUs extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            yourname:'',
            youremail:'',
            yoursubject:'',
            yourmessage:''
        }

        this.updatename = this.updatename.bind(this);
        this.updateemail = this.updateemail.bind(this);
        this.updatesubject = this.updatesubject.bind(this);
        this.updatemessage = this.updatemessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updatename(event) {   
        this.setState({yourname:event.target.value})
    }

    updateemail(event) {   
        this.setState({youremail:event.target.value})
    }

    updatesubject(event) {   
        this.setState({yoursubject:event.target.value})
    }

    updatemessage(event) {   
        this.setState({yourmessage:event.target.value})
    }
    
    handleSubmit() {
        if(this.state.yourname!="" && this.state.youremail!="" && this.state.yoursubject!=="" && this.state.yourmessage!="") {
            alert(this.state.yourname+" you will be contacted soon!!");
            console.log(this.state.yourname+" "+this.state.youremail+" "+this.state.yoursubject+ " "+this.state.yourmessage);
        } else {
            alert("Please enter the required fields");
        }
    }
    
    render() {
    return (
        <div className="mapAndWritetoUs">
            <div className="ContactText">
                Contact Us
            </div>
            <div className="google_map">
                <GoogleMap/>
            </div>
            
            <div className="contactWrite">
                <div className="contactwrite1">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <div>
                                    <div className="ContactUsHead">
                                        <p className="h4 text-center mb-4" style={{fontWeight:"bold"}}>
                                            Contact Us
                                        </p>
                                    </div>
                                    <div className="tablenext">
                                        <table>
                                            <tr>
                                                <th><i class="fa fa-map-marker"></i></th>
                                                <th>
                                                    <address>
                                                        A1-804 ,A1-Wing,Shiv Konkan SRA<br></br>
                                                        Co-op Society,Janu Bohye<br></br>
                                                        Nagar,Malad (East)
                                                    </address>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-phone"></i> </th>
                                                <th>
                                                        9167279641
                                                </th>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-envelope"></i></th>
                                                <th>rahulvishwakarma6189@gmail.com</th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                
                <div className="contactwrite2">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                            <div className="ContactUsHead">
                                <p className="h4 text-center mb-4" style={{fontWeight:"bold"}} >
                                    Write to us
                                </p>
                            </div>
                            <div className="formStart">
                                <form>
                                    <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                    Your name
                                    </label>
                                    <input type="text" id="defaultFormContactNameEx" className="form-control" onChange={this.updatename}/>
                                    <br />
                                    <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                    </label>
                                    <input type="email" id="defaultFormContactEmailEx" className="form-control" onChange={this.updateemail} />
                                    <br />
                                    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Subject
                                    </label>
                                    <input type="text" id="defaultFormContactSubjectEx" className="form-control" onChange={this.updatesubject} />
                                    <br />
                                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Your message
                                    </label>
                                    <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" onChange={this.updatemessage}/>
                                    <br></br>
                                    <div className="text-center mt-4">
                                        <input type="submit" onClick={this.handleSubmit}/>
                                    </div>
                                </form>
                            </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>

            
        </div>
    )
    }
}

export default ContactUs;
