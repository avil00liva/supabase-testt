import { AuthButtonServer } from '@/components/auth-button-server'
import { ComposePost } from '@/components/compose-post'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const {data: {session}} = await supabase.auth.getSession()

  /* const { data: products } = await supabase.from('products').select('*') */

  if(session === null) {
    redirect("/login")
  }

  return (
    <div className="w-full flex flex-col items-center text-white">
      <AuthButtonServer />
      <pre>
        {/* {
          JSON.stringify(products, null, 2)
        } */}
      </pre>
      <ComposePost />
    </div>
  )
}
