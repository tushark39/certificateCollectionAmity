import React,{useState,useEffect} from 'react'
const Form=()=>{
    const [selectedFile,setSelectedFile] = useState({
        file:null
    });
    const [candidateDetail,setcandidateDetail] = useState({
        name:null,
        amityEmail:null,
        email:null
    });
    const {name,amityEmail,email}=candidateDetail;
    const [serverCall,setServerCall] = useState({
        isUploading:false,
        uploaded : false,
        errorMessage : null
    })
    const {isUploading,uploaded,errorMessage}=serverCall;
    const [achievment,setAchievment] = useState({
        courseName:null,
        organisation:null
    });
    const {courseName,organisation} = achievment;
    const handleChangeCandidateDetail = (name) =>(event)=>{
        setcandidateDetail({...candidateDetail,[name]:event.target.value})
    }
    const handleChangeAchievment = (name) =>(event)=>{
        setAchievment({...achievment,[name]:event.target.value})
    }
   const onFileChange = (event) => { 
        setSelectedFile({
            file:event.target.files[0]
        })
      }; 
    const onSubmit = (event)=>{
        event.preventDefault();
        // console.log('candidateDetail : ',candidateDetail);
        // console.log('Achivement : ',achievment);
        // console.log('File  : ',selectedFile.file);
        setServerCall({...serverCall,isUploading:true});
        
    }
    return(
        <div className="container" id="form">
            <div className="row">
                <div className="col-md-12">
                   {
                       isUploading!=true &&  <div className="form-style-5">
                       <form>
                           <fieldset>
                               <legend><span className="number">1</span> Candidate Info</legend>
                               <input type="text" name="field1" placeholder="Your Name *" value={name} onChange={handleChangeCandidateDetail('name')}/>
                               <input type="email" name="field2" placeholder="Your Amity Email *" value={amityEmail} onChange={handleChangeCandidateDetail('amityEmail')}/>
                               <input type="email" name="field3" placeholder="Your Email *" value={email} onChange={handleChangeCandidateDetail('email')}/>
                             </fieldset>
                           <fieldset>
                               <legend><span className="number">2</span> Achievment Information</legend>
                               <input type="text" name="field4" placeholder="Name of the Course / Certificate" value={courseName} onChange={handleChangeAchievment('courseName')} />
                               <input type="text" name="field5" placeholder="Issuing Organization" value={organisation} onChange={handleChangeAchievment('organisation')}/>
                               Scaned Form<span style={{color:"red"}}> *</span> : &nbsp; <input type="file" onChange={onFileChange} style={{marginBottom:10}} accept="application/img" />
                          {
                              selectedFile.file!==null && <div>
                                 <h3>File Details:</h3> 
                                  <p>File Name: {selectedFile.file.name}</p> 
                                  <p>File Type: {selectedFile.file.type}</p> 
                                  <p> 
                                  Last Modified:{" "} 
                                  {selectedFile.file.lastModifiedDate.toDateString()} 
                                  </p> 
                              </div>
                          }
                           </fieldset>
                           <input type="submit" defaultValue="Apply" onClick={onSubmit}/>
                       </form>
                   </div>
                   }
                   {
                       isUploading && <div>Uploading</div>
                   }
                </div>

            </div>
        </div>
    )
}
export default Form;