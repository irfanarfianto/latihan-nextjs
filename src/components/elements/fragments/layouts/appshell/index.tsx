import { useRouter } from "next/router";
import NavbarComponent from "../navbar"

type AppShellProps = {
   children: React.ReactNode
}

const disableNavbar = ['/auth/login', '/auth/register'];

const AppShell = (props: AppShellProps) => {
   const {pathname} = useRouter();
   const { children } = props;
   return (
      <main>
         {!disableNavbar.includes(pathname) && <NavbarComponent />}
         {children}
      </main>
   )
}

export default AppShell;