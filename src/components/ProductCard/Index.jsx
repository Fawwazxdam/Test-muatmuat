import { Edit, Settings, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                </header>

                <div className="overflow-x-auto mt-7">
                    <table className="min-w-full divide-y-2 divide-gray-200">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr className="*:font-medium *:text-gray-900">
                                <th className="px-3 py-2 whitespace-nowrap">#</th>
                                <th className="px-3 py-2 whitespace-nowrap">Nama Produk</th>
                                <th className="px-3 py-2 whitespace-nowrap">Harga</th>
                                <th className="px-3 py-2 whitespace-nowrap">Stock</th>
                                <th className="px-3 py-2 whitespace-nowrap flex justify-center"><Settings /></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
                            <tr className="*:text-gray-900 *:first:font-medium">
                                <td className="px-3 py-2 whitespace-nowrap">1</td>
                                <td className="px-3 py-2 whitespace-nowrap">Processor Intel Core i9</td>
                                <td className="px-3 py-2 whitespace-nowrap">9.000.000</td>
                                <td className="px-3 py-2 whitespace-nowrap">6</td>
                                <td className="px-3 py-2 whitespace-nowrap text-center">
                                    <div className="flex gap-3 justify-center">
                                    <Link href="edit" className="text-amber-400 hover:text-amber-500"><Edit /></Link>
                                    <Link href="edit" className="text-fuchsia-500 hover:text-fuchsia-600"><Trash /></Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ProductCard