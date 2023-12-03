import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./login.module.scss"

const LoginViews = () => {
   const { push } = useRouter();

   const handlerCoba = () => {
      push('/product')
   }

   return (
      <div className={styles.login}>
         <h1 className="text-3xl">Login</h1>
         <p>Belum punya akun? <Link href="/auth/register">
           Register
         </Link>
         </p>
         <button onClick={() => handlerCoba()} className="pe-2">coba</button>
      </div>
   )
}

export default LoginViews;