import React ,{useState} from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageName from './imgs/login-signup.jpeg';
import "./style/style.css";


function Signup(){
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [submitedData,setSubmitedData]= useState("");


    
    const handleSubmit = (e) =>{ 
        const newSubmitedData ={
            email,
            username,
            password,
        };
        const updateSubmitedData = [...submitedData, newSubmitedData];
        setSubmitedData(updateSubmitedData);
        localStorage.setItem('SubmitedData:', JSON.stringify(updateSubmitedData));
    
        console.log(newSubmitedData);
        
    }
    
    


    return(
        <Fragment>
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex  justify-content-center">
                        <div className="form-container ">
                            <h2 className="mb-4">Welcome to Design Community</h2>
                            <p>Already have an account? <a href="#">Log in</a></p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username" value={username}
                                        onChange={(e) => setUsername(e.target.value)}></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        value={password} onChange={(e)=> setPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div className="password-requirements mb-4">
                                    
                                    <ul>
                                        <li>Use 8 or more characters</li>
                                        <li>One Uppercase character</li>
                                        <li>One lowercase character</li>
                                        <li>One special character</li>
                                        <li>One number</li>
                                    </ul>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="promotionsCheck"></input>
                                    <label className="form-check-label" htmlFor="promotionsCheck">I want to receive emails about the product, feature updates, events, and marketing promotions.</label>
                                </div>
                                <p className="mt-3">By creating an account, you agree to the <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.</p>
                                <button type="submit" className="btn  w-50">Create an account</button>
                                
                                <p className="mt-3">Already have an account? <a href="#">Log in</a></p>
                            </form>
                </div>
            </div>
            
            <div className="col-md-6 d-none d-md-block p-0">
                <div className="right-section vh-100 ">
                    <img src={imageName} alt="design" className="img-fluid w-100 h-100" />
                
                </div>
            </div>
        </div>
    </div>
</Fragment>
    )
}
export default Signup;