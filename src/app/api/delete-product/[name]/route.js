import connectionPool from "@/db";

export async function DELETE(req, { params }) {
    const { name } = params;
    console.log(name);
    try {
        const result = await connectionPool.query(
            "DELETE FROM products WHERE name = $1 RETURNING *",
            [name]
        );

        if (result.rowCount === 0) {
            return new Response(JSON.stringify({ message: "Produk tidak ditemukan." }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ message: "Produk berhasil dihapus." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
