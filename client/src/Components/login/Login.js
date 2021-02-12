import React,{ useState} from 'react';
import axios from 'axios'

const Login = () => {
    
    const [student, setStudent] = useState({
        email_id: '',
        password: '',
    })

    const { email_id, password } = student;

    const InputChange = e =>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const onhandlesubmit = e =>{
        e.preventDefault();

        const bodyFormData ={
            email_id:email_id,
            password:password,
        }

        //console.log("login",bodyFormData);

        axios.post("https://mahadev-yash-19.herokuapp.com/Login", bodyFormData).then((result) => {
            console.log("result=>", result)
            alert(result.data.message)
            window.location.href="/home"
            localStorage.setItem("Token_Key",result.data.session)
        }).catch((error) => {
            window.location.href="/"
            alert("Incorrect Username and/or Password!")
        })
    }


    return ( 
        <div className="container py-4" >
            <div className="w-50 mx-auto shadow-lg p-5 mb-5 bg-white" style={{ borderRadius: '60px',margin:'125px 0 0 0'}}>
                <h1 className="text-center mb-4"><b>Login</b></h1>
                <form onSubmit={e => onhandlesubmit(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Email</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Example@gmail.com"
                                required
                                name="email_id"
                                value={email_id}
                                onChange={e => InputChange(e) }
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Password</label>
                            <input type="password"
                                className="form-control"
                                placeholder="***********"
                                required
                                name="password"
                                value={password}
                                onChange={e => InputChange(e) }
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <button type="submit" style={{ width: '200px',margin:'20px 0 0 120px'}} className="btn btn-outline-primary">LOGIN</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;