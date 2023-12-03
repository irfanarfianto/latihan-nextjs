import NavbarComponent from "../navbar"

type AppShellProps = {
   children: React.ReactNode
}
const AppShell = (props: AppShellProps) => {
   const { children } = props;
   return (
      <main>
         <NavbarComponent />
         {children}
      </main>
   )
}

export default AppShell;