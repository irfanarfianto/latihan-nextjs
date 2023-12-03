import Link from "next/link"
import styles from "./register.module.css"

const RegisterViews = () => {
   return (
      <div className={styles.register}>
         <h1>Register</h1>
         <p>Sudah punya akun? 
            <Link href="/auth/login"> login</Link>
         </p>
      </div>
   )
}

export default RegisterViews;