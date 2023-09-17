import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export function ComposePost () {
    const addPost = async (formData: FormData) => {
        "use server"
        const product_name = formData.get("product_name")
        const product_desc = formData.get("product_desc")
        const product_price = formData.get("product_price")

        const supabase = createServerActionClient({cookies})

        await supabase.from("products").insert({product_name, product_desc, product_price})

        console.log("holaaaa")
    }

    return (
        <form action={addPost} className="flex flex-1 flex-col gap-4 text-black mt-6 w-[300px] h-[320px] border-2 border-gray-400 rounded-md">
            <input type="text" name="product_name" placeholder="product name" />
            <input type="text" name="product_desc" placeholder="product description" />
            <input type="number" name="product_price" placeholder="product price" />

            <button type="submit" className="px-8 py-4 rounded-md bg-gray-600">
                Cargar
            </button>
        </form>
    )
}