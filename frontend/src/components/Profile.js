import React from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import DefaultuserImage from "../uploads/team-male.jpg";
const axios = require('axios');

class  UserProfile extends React.Component {
    
   constructor(props){
       super(props);
       this.state={
           username:this.props.username,
           user_id:this.props.user_id,
           email:this.props.email,
           uploadedFile:null,
           msg:'',
           profileimage:this.props.profileimage
       }
   }

 emailChangeHandler=(e)=> {
        this.setState({email:e.target.value})
    }

    fileChangedHandler=(event)=>{
        this.setState({uploadedFile: event.target.files[0]})
    }

    fetchuserRecords=(user_id)=>{
        axios.get("http://localhost:5000/userapi/getUserDetails/"+user_id,
        { headers: {
             "content-type": "application/json",
           }
         }
         )
           .then(res => {
           
             this.setState({profileimage:res.data.results[0].profileimage});
             this.setState({email:res.data.results[0].email});
             
           });
      }

    onProfileUpdate = (e) => { 
        e.preventDefault();
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "profileImage", 
          this.state.uploadedFile
        );
        formData.append( 
            "email", 
            this.state.email
          ); 
          formData.append( 
            "user_id", 
            this.state.user_id
          ); 
       
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
       
       // console.log(formData);
        // Request made to the backend api 
        // Send formData object 
        axios.post("http://localhost:5000/userapi/updateProfile", formData,config).then((response) => {
           
           this.setState({msg:response.data.message});
           this.fetchuserRecords(this.state.user_id);
        }).catch((error) => {
            this.setState({msg:error.data.message});
    }); 
      }; 

      

      componentDidMount() {
       this.fetchuserRecords(this.state.user_id);
       
      }

render(){
    if(this.state.profileimage){
        var Imagefile=this.state.profileimage;
        var imagePath = Imagefile.replace('public/','');;
        
        var profileImage="http://localhost:5000/"+imagePath;
    }else{
        profileImage=DefaultuserImage;
    }
   return (
        <Container>
        <Row>

        <Col>
        
        <h1>User Profile</h1>
    <img src={profileImage} alt="profile"/>
        </Col>
        <Col>
        <Form className="form">     
    <p>{this.state.msg}</p>
      
     <Form.Group controlId="formCategory1">     
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" defaultValue={this.state.username} />
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
   <Form.Label>Email{this.state.email}</Form.Label>
    <Form.Control type="email" defaultValue={this.state.email} onChange={this.emailChangeHandler} />
  
  </Form.Group>
  <Form.Group controlId="profileImage">     
    <Form.Label>Upload Profile Image</Form.Label>
   
    <Form.Control type="file" name="profileImage" onChange={this.fileChangedHandler} />
  
  </Form.Group>
  <Button variant="primary" onClick={this.onProfileUpdate}>Update Profile</Button>
  </Form>
   </Col>
   
       </Row>
        </Container>
    )
}
} 
const mapStatetoProps=(state)=>{
    return{
     username:state.user.userDetails.username,
     user_id:state.user.userDetails.userid,
     profileimage:state.user.profileimage,
     email:state.user.email,
       msg:state.user.msg
    }
   }
   

   export default connect(mapStatetoProps)(UserProfile);
