import React,{useState,useEffect} from 'react'
import IsUploading from './IsUploading';
const Form=()=>{
    const [selectedFile,setSelectedFile] = useState({
        file:null
    });
    const [candidateDetail,setcandidateDetail] = useState({
        name:"",
        amityEmail:"",
        email:""
    });
    const {name,amityEmail,email}=candidateDetail;
    const [serverCall,setServerCall] = useState({
        isUploading:false,
        uploaded : false,
        errorMessage : null
    })
    const {isUploading,uploaded,errorMessage}=serverCall;
    const [achievment,setAchievment] = useState({
        courseName:"",
        organisation:""
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
        console.log('candidateDetail : ',candidateDetail);
        console.log('Achivement : ',achievment);
        console.log('File  : ',selectedFile.file);
        if (name!==""&&amityEmail!==""&&email!==""&&courseName!==""&&organisation!==""&&selectedFile.file!==null) {
            setServerCall({...serverCall,isUploading:true,errorMessage:""});
            setInterval(()=>{ 
                setServerCall({...serverCall,isUploading:false,errorMessage:"Form Uploaded"}); 
                setcandidateDetail({
                    name:"",
                    amityEmail:"",
                    email:""
                });
                setAchievment({
                    courseName:"",
                    organisation:""
                })
            }, 3000);
            setSelectedFile({
                file:null
            })
        } 
        else if(name===""){
            // alert("You have not entered your name");
            setServerCall({...serverCall,errorMessage:"You have not entered your name"})
        }
        else if(amityEmail===""){
            // alert("You have not entered your Amity Email");
            setServerCall({...serverCall,errorMessage:"You have not entered your Amity Email"})

        }
        else if(email===""){
            // alert("You have not entered your Email")
            setServerCall({...serverCall,errorMessage:"You have not entered your Email"})
        }
        else if(courseName===""){
            // alert("You have not entered Course Name")
            setServerCall({...serverCall,errorMessage:"You have not entered Course Name"})

        }
        else if(organisation===""){
            // alert("You have not entered your Issuing Organisation")
            setServerCall({...serverCall,errorMessage:"You have not entered your Issuing Organisation"})

        }
        else if(selectedFile.file===null){
            // alert("You have not selected any file")
            setServerCall({...serverCall,errorMessage:"You have not selected any file"})

        }
        else{
             alert("Error")
        }
        

    }
    return(
        <div className="container" id="form">
            <div className="row">
                <div className="col-md-12">
                   {
                       isUploading!=true &&  <div className="form-style-5">
                           <div style={{marginTop:20,marginBottom:20}}>{errorMessage}</div>
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
                       isUploading && <IsUploading/>
                   }
                </div>

            </div>
        </div>
    )
}
export default Form;