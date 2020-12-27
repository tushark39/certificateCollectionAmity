import React from 'react'
const Form=()=>{
    return(
        <div className="container" id="form">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-style-5">
                        <form>
                            <fieldset>
                                <legend><span className="number">1</span> Candidate Info</legend>
                                <input type="text" name="field1" placeholder="Your Name *" />
                                <input type="email" name="field2" placeholder="Your Amity Email *" />
                                <input type="email" name="field3" placeholder="Your Email *" />
                              </fieldset>
                            <fieldset>
                                <legend><span className="number">2</span> Achievment Information</legend>
                                <input type="text" name="field4" placeholder="Name of the Course / Certificate" />
                                <input type="text" name="field5" placeholder="Issuing Organization" />
                                Scaned Form<span style={{color:"red"}}> *</span> : &nbsp; <input type="file" onChange={{}} style={{marginBottom:10}} accept="application/img" />
                           {
                            //    this.state.selectedFile && <div>
                            //       <h2>File Details:</h2> 
                            //        <p>File Name: {this.state.selectedFile.name}</p> 
                            //        <p>File Type: {this.state.selectedFile.type}</p> 
                            //        <p> 
                            //        Last Modified:{" "} 
                            //        {this.state.selectedFile.lastModifiedDate.toDateString()} 
                            //        </p> 
                            //    </div>
                           }
                            </fieldset>
                            <input type="submit" defaultValue="Apply" />
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Form;