import React from 'react';
import '../../css/ContactUs.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import GoogleMap from '../Home/GoogleMap';


function ContactUs() {
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
                                    <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                    </label>
                                    <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Subject
                                    </label>
                                    <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Your message
                                    </label>
                                    <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                                    <br></br>
                                    <div className="text-center mt-4">
                                            <MDBBtn color="warning" outline type="submit">
                                                Send
                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                            </MDBBtn>
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

export default ContactUs;
