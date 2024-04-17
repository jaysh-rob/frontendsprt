import React, { useEffect,useState } from "react";
import { post } from "../helper/apiHelper";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Remove scrollbar on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrollbar when component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const responseData = await post("login", {
        email,
        password
      });
      if(responseData?.success == true ){
        localStorage.setItem('logintkn', JSON.stringify(responseData));
        navigate("/");
      }
      else
      {
        alert("Invalid Credentials Error")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="vh-100 d-flex justify-content-center align-items-start"
      style={{ marginTop: "50px" }}
    >
      <div
        className="card text-black"
        style={{
          borderRadius: "25px",
          border: "2px solid orange",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div className="card-body p-md-5">
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
          <div  className="mx-1 mx-md-4">
            <div className="mb-4">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                value={password}
              />
            </div>

            <div className="mb-4">
              <a> Forgot Password ?</a>
            </div>

            <div className="d-grid">
              <button type="button" onClick={()=>handleSubmit()} className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
