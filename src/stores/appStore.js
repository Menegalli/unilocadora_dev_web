import { defineStore } from "pinia";
const useAppStore = defineStore("app", {
  state: () => ({
    carrinho: {
      filmes: [],
      cliente: null,
      valor: 0,
      data: null,
      devolvido: false,
    },
    clienteAtual: null,
    clientesSalvos: [],
    filmes: [],
  }),
  actions: {
    addFilme(filme) {
      this.filmes.push(filme);
    },
    setFilmes(filmes) {
      this.filmes = filmes;
    },
    setFilmeDirector(filme_id, director_name) {
      this.filmes.map(function (filme) {
        if (filme.id === filme_id) {
          return (filme.director = director_name);
        }
      });
    },
    setFilmeActors(filme_id, actors) {
      this.filmes.map(function (filme) {
        if (filme.id === filme_id) {
          return (filme.actors = actors);
        }
      });
    },
    getFilmesByAno(ano) {
      return this.filmes.filter((filme) => filme.ano == ano);
    },
    getFilmesByActor(actor) {
      return this.filmes.filter((filme) => filme.atores.includes(actor));
    },
    setCliente(cliente) {
      this.clienteAtual = cliente;
    },
    addCliente(cliente) {
      this.clientesSalvos.push(cliente);
    },
    setClientesSalvos(clientes) {
      this.clientesSalvos = clientes;
    },
    limparCarrinho() {
      this.carrinho = {
        filmes: [],
        cliente: null,
        valor: 0,
        data: null,
        devolvido: false,
      };
    },
    setClienteCarrinho(cliente) {
      this.carrinho.cliente = cliente;
    },
    addFilmeCarrinho(filme) {
      this.carrinho.filmes.push(filme);
    },
  },
});
export const appStore = useAppStore();
