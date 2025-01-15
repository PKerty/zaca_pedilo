const server = Bun.serve({
  port: 42069,

  fetch(rq) {
    return new Response(JSON.stringify({ message: "Zaca Pedilo" }) + "\n", {
      status: 200,
    });
  },
});

console.log("Started server on port:", server.url);

