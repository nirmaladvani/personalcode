import './styles.css'

export default function Register() {
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
        <div className='field'>
          <label htmlFor='password'>Confirm Password </label>
          <input type='password' name='password' id='password' />
        </div>
        <button type='Register'>Submit</button>
      </form>
      <p>Already got account?</p>
      <button>Login</button>
    </div>
  )
}
