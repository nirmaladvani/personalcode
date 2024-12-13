import './styles.css'

export default function Login() {
  return (
    <div className='container'>
      <form>
        <div className='field'>
          <label htmlFor='username'>Username </label>
          <input type='text' name='username' id='username' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Password </label>
          <input type='password' name='password' id='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>Do not have an account?</p>
      <button>Register</button>
    </div>
  )
}
