import axios from 'axios';
import React,{Component} from 'react'; 
class Upload extends Component { 

   

    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    };

    open = event => {
        document.getElementById('fileInput').click()
   }

     
    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    };
    
    
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choisis un fichier et appui sur le bouton upload</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      return ( 
        <div> 

            <div> 
                <input id='fileInput' style={{display:'none'}} type="file" onChange={this.onFileChange} /> 
                <input type='button' value='upload' onClick={this.open}/> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default Upload; 