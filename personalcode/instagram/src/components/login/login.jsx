import { useEffect } from 'react'
import './login.css'

export default function Login({ toggle }) {
  return (
    <div className='container'>
      <div className='img-container'>
        <img src='./src/assets/home-phones.png' alt='' />
      </div>
      <div className='form-container'>
        <div className='login-container'>
          <form className='form-floating'>
            <img src='./src/assets/instagram.png' alt='instagram' />
            <div className='form-floating col-12'>
              <input
                type='text'
                name='username'
                id='floatingInputUsername'
                className='form-control'
              />
              <label htmlFor=''>Phone number, username, or email</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                name='username'
                id='floatingInputUsername'
                className='form-control'
              />
              <label htmlFor=''>Password</label>
            </div>
            <button className='btn btn-primary'>Log in</button>
          </form>
          <div className='separator'>OR</div>
          <a href='#'>
            <img src='./src/assets/fb.png' alt='facebook' />
            Login with facbook
          </a>
          <a href='#'>Forgot password?</a>
        </div>
        <div className='signup-container'>
          <div>
            Don't have account? <a href='#'>Signup</a>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <img src='./src/assets/instagram.png' alt='instagram' />
          <input type='text' name='username' id='username' />
          <label htmlFor='username'>Phone number, username, or email</label>
          <input type='text' name='password' id='password' />
          <label htmlFor='password'>Password</label>
          <button>Log in</button> */
}

// ;<div className='login-container'>
//   <img src='./src/assets/instagram.png' alt='Instagram Logo' />
//   <form
//     onSubmit={(e) => {
//       e.preventDefault()
//       console.log('submitted')
//     }}
//     className='form-floating'
//   >
//     <div className='form-floating mb-3 col-6'>
//       <input
//         type='text'
//         name='username'
//         id='floatingInputUsername'
//         className='form-control'
//         required
//       />
//       <label htmlFor='floatingInputUsername'>
//         Phone number, username, or email
//       </label>
//     </div>
//     <div className='form-floating mb-3 col-6'>
//       <input
//         type='password'
//         name='password'
//         id='floatingInputPassword'
//         className='form-control'
//         required
//       />
//       <label htmlFor='floatingInputPassword'>Password</label>
//     </div>
//     <button type='submit' className='btn btn-primary'>
//       Log in
//     </button>
//   </form>
//   <div className='separator'>OR</div>
//   <img src='./src/assets/fb.png' alt='facebook login' />
//   <a href='#' className='login-fb'>
//     Login with facebook
//   </a>
//   <a href='#'>Forgot Password?</a>
// </div>
