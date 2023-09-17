'use client'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'


const LogIn = ({ session }: {session: Session | null}) => {
    const router = useRouter()

    const supabase = createClientComponentClient()

    const handleSignin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        })
    }

    const handleLogOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }


  return (
    <header>
        {session === null ? 
                <button className='border-white border-2 p-8 rounded-md' onClick={handleSignin}>Login</button>
            :
            <button className='border-2 border-white py-2 px-8 rounded-md' onClick={handleLogOut}>Logout</button>
        }
        
    </header>
  )
}

export default LogIn