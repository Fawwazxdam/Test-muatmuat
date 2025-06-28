import connectionPool from "@/db";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, price, stock } = body;
        const result = await connectionPool.query('INSERT INTO products (name, price, stock) VALUES ($1, $2, $3)', [name, price, stock]);
        return new Response(JSON.stringify(result.rows), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}