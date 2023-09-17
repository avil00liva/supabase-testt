import { AuthButtonServer } from "@/components/auth-button-server"


const Login = () => {
  return (
    <section className="w-[300px] h-96 rounded-xl border-2 text-white border-white mx-auto flex justify-center items-center">
        <AuthButtonServer />
    </section>
  )
}

export default Login