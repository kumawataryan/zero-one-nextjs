export async function GET() {
    return new Response(JSON.stringify({ message: "Test route works" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}