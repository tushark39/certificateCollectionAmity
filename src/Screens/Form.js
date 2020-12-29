import axios from 'axios';
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
        errorMessage : null,
        success : ""
    })
    const {isUploading,uploaded,errorMessage,success}=serverCall;
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
    const imageUpload=()=>{
        const data = new FormData();
        data.append('file',selectedFile.file)
        data.append('upload_preset','UserProfile')
        data.append("cloud_name","dd0txohwe")
        axios.post('https://api.cloudinary.com/v1_1/dd0txohwe/image/upload',data)
        .then(res=>{
            axios.post('https://newsapp-api-admin.herokuapp.com/form/api',{
                "name":name,
                "email":email,
                "amityEmail":amityEmail,
                "courseName":courseName,
                "organisation":organisation,
                "imageLink":res.data.url
            })
            .then(()=>{
                setServerCall({...serverCall,isUploading:false,errorMessage:null,success:"Form Uploaded"}); 
                setcandidateDetail({
                    name:"",
                    amityEmail:"",
                    email:""
                });
                setAchievment({
                    courseName:"",
                    organisation:""
                })
                setSelectedFile({
                    file:null
                })
            })
            .catch(error=>alert("Request failed, Please contact system organisation with error : ",error))
        })
        .catch(()=>{
            setServerCall({...serverCall,isUploading:false,errorMessage:"Invalid File type selected!!"}); 
                setcandidateDetail({
                    name:"",
                    amityEmail:"",
                    email:""
                });
                setAchievment({
                    courseName:"",
                    organisation:""
                })
                setSelectedFile({
                    file:null
                })
        })
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        
        // console.log('candidateDetail : ',candidateDetail);
        // console.log('Achivement : ',achievment);
        // console.log('File  : ',selectedFile.file);
        if (name!==""&&amityEmail!==""&&email!==""&&courseName!==""&&organisation!==""&&selectedFile.file!==null) {
            setServerCall({...serverCall,isUploading:true,errorMessage:""});
            imageUpload()
            
        } 
        else if(name===""){
            // alert("You have not entered your name");
            setServerCall({...serverCall,errorMessage:"You have not entered your name"})
            document.getElementById("form").scrollIntoView()
        }
        else if(amityEmail===""){
            // alert("You have not entered your Amity Email");
            setServerCall({...serverCall,errorMessage:"You have not entered your Amity Email"})
            document.getElementById("form").scrollIntoView()


        }
        else if(email===""){
            // alert("You have not entered your Email")
            setServerCall({...serverCall,errorMessage:"You have not entered your Email"})
            document.getElementById("form").scrollIntoView()

        }
        else if(courseName===""){
            // alert("You have not entered Course Name")
            setServerCall({...serverCall,errorMessage:"You have not entered Course Name"})
            document.getElementById("form").scrollIntoView()


        }
        else if(organisation===""){
            // alert("You have not entered your Issuing Organisation")
            setServerCall({...serverCall,errorMessage:"You have not entered your Issuing Organisation"})
            document.getElementById("form").scrollIntoView()


        }
        else if(selectedFile.file===null){
            // alert("You have not selected any file")
            setServerCall({...serverCall,errorMessage:"You have not selected any file"})
            document.getElementById("form").scrollIntoView()


        }
        else{
             alert("Error")
            document.getElementById("form").scrollIntoView()

        }
        

    }
    return(
        <div className="container" id="form">
            <div className="row">
                <div className="col-md-12">
                   {
                       isUploading!=true &&  <div className="form-style-5">
                           {
                               errorMessage!==null && <div className="alert alert-danger" role="alert" style={{marginTop:20,marginBottom:20}}>{errorMessage}</div>
                           }  
                           {
                               success!="" && <div className="alert alert-success" role="alert" style={{marginTop:20,marginBottom:20}}>{success}</div>
                           }
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