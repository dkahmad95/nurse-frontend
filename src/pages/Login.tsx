import LoginForm from "../Components/LoginForm"


const Login = () => {
  return (
    <main  className="flex flex-col justify-center py-12 xl:py-0 bg-accent">
           <div className="container mx-auto ">
           <LoginForm/>
           </div>
    </main>
  )
}

export default Login