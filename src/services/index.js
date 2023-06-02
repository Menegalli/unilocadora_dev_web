import api from "./api";
import { appStore } from "src/stores/appStore";

const services = {
  getAllFilmes(callback) {
    if (appStore.filmes.length == 0) {
      console.log("getAllFilmes zerado");
      api
        .get("/movie/popular?language=pt-BR&page=1append_to_response=credits")
        .then((response) => {
          appStore.setFilmes(response.data.results);
          if (callback != null) {
            callback(appStore.filmes);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      console.log("getAllFilmes com dados");
      if (callback != null) {
        console.log("getAllFilmes com dados e callback ");
        console.log(appStore.filmes);
        callback(appStore.filmes);
      } else {
        return appStore.filmes;
      }
    }
  },
  getFilmeDirector(filme_id) {
    api
      .get(
        "/movie/" +
          filme_id +
          "/credits?language=pt-BR&page=1append_to_response=credits"
      )
      .then((response) => {
        appStore.setFilmeDirector(
          filme_id,
          response.data.crew.find((crew) => crew.job === "Director").name
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  getFilmeActors(filme_id) {
    api
      .get(
        "/movie/" +
          filme_id +
          "/credits?language=pt-BR&page=1append_to_response=credits"
      )
      .then((response) => {
        appStore.setFilmeActors(
          filme_id,
          response.data.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 4)
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  getFilmesByActor(actor) {
    return filmesStore.getFilmesByActor(actor);
  },
  saveFilme(filme) {
    filmesStore.addFilme(filme);

    /* api.post('/filmes', filme).then((response)=>{
      filmesStore.setFilmes(response.data)
    }).catch((error)=>{
      alert(error.message)
    })
    */
  },
  saveCliente(cliente) {
    this.getClientes();
    appStore.addCliente(cliente);
    appStore.setCliente(cliente);
    return true;
  },
  getClientes() {
    if (appStore.clientesSalvos?.length == 0) {
      console.log("getClientes zerado");
      api
        .get("clientes.json")
        .then((response) => {
          console.log(response.data);
          appStore.setClientesSalvos(response.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      console.log("getClientes com dados");
      return appStore.clientesSalvos;
    }
  },
  loginCliente(cliente) {
    if (appStore.clientesSalvos?.length == 0) {
      this.getClientes();
    }
    var usuario = appStore.clientesSalvos.find(
      (clienteSalvo) =>
        clienteSalvo.email == cliente.email &&
        clienteSalvo.senha == cliente.senha
    );
    if (usuario != null && usuario != undefined) {
      appStore.clienteAtual = usuario;
      return usuario;
    } else {
      return null;
    }
  },
};

export default services;
