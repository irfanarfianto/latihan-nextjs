import Link from "next/link"

const Register = () => {
   return (
      <div className="register">
         <h1>Register</h1>
         <p>Sudah punya akun? 
            <Link href="/auth/login"> login</Link>
         </p>
      </div>
   )
}

export default Register;