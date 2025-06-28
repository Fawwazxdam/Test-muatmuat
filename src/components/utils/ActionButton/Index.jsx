import { SquarePen, Trash } from 'lucide-react'
import React from 'react'

const ActionButton = ({Link, setShowDeleteModal}) => {
    return (
        <div className="flex gap-3 justify-center">
            <Link href="edit" className="text-amber-400 hover:text-amber-500"><SquarePen /></Link>
            <button href="edit" className="text-fuchsia-500 hover:text-fuchsia-600" onClick={() => setShowDeleteModal(true)}><Trash /></button>
        </div>
    )
}

export default ActionButton