import React from 'react';
import fire from '../config/fire'

export default function UserChat() {
    return (
        <div>
            <div class="container">
                <div style={{justifyContent:"center"}} class="row">
                    <div style={{border:"1px solid rgba(39,41,43,0.1)", justifyContent:"center"}}>
                        <div style={{height:"60px", border:"1px solid rgba(39,41,43,0.1)", justifyContent: "center", alignContent:"center"}} class="row">
                            <div style={{justifyContent:"center", alignContent:"center"}} class="row">MessageBox</div>
                        </div>
                        <div style={{height:"866px", justifyContent:"center", alignContent:"center"}} class="row">ChatDisplay</div>
                        <div style={{height:"50px", justifyContent:"center", alignContent:"center"}} class="row">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Type your message..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}