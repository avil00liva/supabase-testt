'use client'
import React, { useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type Props = {}

const LogIn = (props: Props) => {
    const [session, setSession] = useState<Session | null>(null)

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
    }

    useEffect(()=>{
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
        }
        getSession()
    }, [])

  return (
    <header>
        {session === null ? 
                <button className='py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover' onClick={handleSignin}>Login</button>
            :
            <button className='py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover' onClick={handleLogOut}>Logout</button>
        }
        
    </header>
  )
}

export default LogIn