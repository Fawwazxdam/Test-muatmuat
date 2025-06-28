import Link from 'next/link'
import React from 'react'

const Page = ({product}) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl mb-7">Ubah Produk</h2>
            <form action="">
                <div className='p-6 shadow border-gray-300'>
                    <div className="mb-6">
                        <label htmlFor="name">
                            <span className="text-sm font-medium text-gray-700"> Nama Produk </span>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                className="mt-0.5 w-full h-8 rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price">
                            <span className="text-sm font-medium text-gray-700"> Harga </span>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="mt-0.5 w-full h-8 rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="stock">
                            <span className="text-sm font-medium text-gray-700"> Stok </span>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                className="mt-0.5 w-full h-8 rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-between mt-7">
                    <Link href="/"
                        className="block rounded bg-gray-400 px-3 py-2 text-sm font-medium text-white hover:bg-gray-500 hover:cursor-pointer"
                    >
                        Kembali
                    </Link>
                    <button
                        type="submit"
                        className="block rounded bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 hover:cursor-pointer"
                    >
                        Tambah Produk
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Page