import connectionPool from "@/db";

export async function GET(params) {
    try {
        const result = await connectionPool.query('SELECT * FROM products');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}