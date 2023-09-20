const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const tasks = [
    { id: 1, description: "Hacer la compra", completed: false },
    { id: 2, description: "Lavar el coche", completed: true },
  ];
  res.end(JSON.stringify(tasks));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
