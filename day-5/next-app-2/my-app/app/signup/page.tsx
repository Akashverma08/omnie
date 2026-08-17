export default function SignUp() {
  return (
    <form action="/api/signup" method="post">
      <input type="text" name="username" placeholder="enter username" />
      <input type="password" name="password" placeholder="Enter the password"/>
      <input type="text" name="city" placeholder="Enter the city"/>
      <input type="tel" name="contact" placeholder="Enter the contact no."/>
      <button type='submit'>Submit</button>

    </form>
  )
}