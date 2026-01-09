import { FaWhatsapp,FaFacebook,FaGoogle, FaGithub } from 'react-icons/fa';
import './login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
    const submit=()=>{
        alert('login succesfully ')
        
    }
    return (
        <>
            <div className="loginmain-div">
               <div className='login-div'> 
               



<div class="tab-content">
 
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form onSubmit={()=>navigate('/')}>
      <div class="text-center mb-3 ml-5 " >
        <p>Sign in with:</p>
       
          <FaFacebook className='login-ico' />
          <FaWhatsapp className='login-ico' />
          <FaGoogle className='login-ico'/>
          <FaGithub className='login-ico'/>
    </div>

      <p class="text-center">or:</p>

      
      <div data-mdb-input-init class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control" placeholder='Email or Username' />
       
      </div>

      <div data-mdb-input-init class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" placeholder='Password' />
        
      </div>

    
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" />
            <label class="form-check-label" > Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      
      <button type="submit" className='login-btn' onClick={submit}>Sign in</button>

      
      </form>
  </div>
</div>
    </div>
    </div>
        </>
    )
}
export default Login;