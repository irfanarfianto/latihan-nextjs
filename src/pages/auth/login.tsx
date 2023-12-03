import Link from "next/link"
import { useRouter } from "next/router"

const Login = () => {
   const { push } = useRouter();

   const handlerCoba = () => {
      push('/product')
   }

   return (
      <div className="login">
         <h1>Login</h1>
         <p>Belum punya akun? <Link href="/auth/register">
           Register
         </Link>
         </p>
         <button onClick={() => handlerCoba()}>coba</button>
      </div>
   )
}

export default Login;