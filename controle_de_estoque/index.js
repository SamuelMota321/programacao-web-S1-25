const express = require("express");
const app = express();

const porta = 4500;

// Usar o middleware para o express reconhecer JSON no corpo da requisição
app.use(express.json());

const produtos = [];

app.post("/adicionar/:id/:nome/:qtd", (req, res) => {
  const { id, nome, qtd } = req.params;
  const produto = { id, nome, qtd: parseInt(qtd) };

  const produtoExistente = produtos.find(p => p.id === id);
  if (produtoExistente) {
    return res.status(400).json({ mensagem: "Produto já existe." });
  }

  produtos.push(produto);
  return res.status(201).json({ mensagem: "Produto adicionado com sucesso", produto });
});

app.patch("/editar/:id/:qtd", (req, res) => {
  const { id, qtd } = req.params;
  const qtdAtualizada = parseInt(qtd);

  const produto = produtos.find(p => p.id === id);
  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado." });
  }

  produto.qtd = qtdAtualizada;
  return res.status(200).json({ mensagem: "Produto editado com sucesso", produto });
});

app.delete("/remover/:id", (req, res) => {
  const { id } = req.params;

  const produtoIndex = produtos.findIndex(p => p.id === id);
  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado." });
  }

  produtos.splice(produtoIndex, 1);
  return res.status(200).json({ mensagem: "Produto removido com sucesso" });
});

app.get("/listar", (req, res) => {
  if (produtos.length === 0) {
    return res.status(200).json({ mensagem: "Nenhum produto encontrado." });
  }

  return res.status(200).json(produtos);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta "http://localhost:${porta}"`);
});
