'use client'
import axios from "axios";
import { Edit2, Settings, SquarePen, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
// import handler from "./Api/data/getProducts";

const Home = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    axios.get('/api/get-products')
      .then(res => setProducts(res.data))
      .catch(err => console.log({ error: err.message }))
  }


  const handleDelete = () => {
    axios.delete(`/api/delete-product/${selectedName}`)
      .then(res => {
        getProducts()
        setShowDeleteModal(false);
        setSelectedName(null);
      })
      .catch(err => console.log({ error: err.message }));
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-end mt-7">
          <Link href="/add">
            <button className="bg-teal-600 px-3 py-1 rounded text-white hover:bg-teal-700 hover:cursor-pointer">+ Tambah</button>
          </Link>
        </div>
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
                {products.map((product, index) => (
                  <tr key={index + 1} className="*:text-gray-900 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">{index}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{product.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{product.price}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{product.stock}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-center">
                      <div className="flex gap-3 justify-center">
                        <Link href="edit" className="text-amber-400 hover:text-amber-500"><SquarePen /></Link>
                        <button href="edit" className="text-fuchsia-500 hover:text-fuchsia-600" onClick={() => { setShowDeleteModal(true); setSelectedName(product.name) }}><Trash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Konfirmasi Hapus</h2>
            <p className="text-sm text-gray-600 mb-6">Yakin ingin menghapus Data ini? Tindakan ini tidak dapat dibatalkan.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => { setShowDeleteModal(false); setSelectedName('') }}
                className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home