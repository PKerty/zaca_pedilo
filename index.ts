const PORT = process.env.PORT || 69420;

const server = Bun.serve({
  port: PORT,

  fetch(rq) {
    return new Response(JSON.stringify({ message: "Zaca Pedilo" }) + "\n", {
      status: 200,
    });
  },
});

console.log("Started server on port:", server.url);
