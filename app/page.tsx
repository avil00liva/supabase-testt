import LogIn from '@/components/LogIn'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  /* const { data: products } = await supabase.from('products').select('*') */

  return (
    <div className="w-full flex flex-col items-center text-white">
      <LogIn />
      <pre>
        {/* {
          JSON.stringify(products, null, 2)
        } */}
      </pre>
    </div>
  )
}
