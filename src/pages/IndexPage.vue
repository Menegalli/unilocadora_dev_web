<template>
  <q-page class="flex flex-center bg-grey-10">
    <div
      class="q-pa-md row items-center justify-center q-gutter-md"
      v-if="showFormLogin"
    >
      <div style="width: 35em">
        <FormLogin
          @loginCliente="onLoginCliente"
          :cliente="{
            email: '',
            senha: '',
          }"
        />
      </div>
    </div>

    <div v-if="naoLogado()" class="text-white">
      Olá! Seja bem vindo! Faça seu
      <q-btn
        class="q-ma-sm bg-white text-black"
        @click="showFormLogin = !showFormLogin"
        >Login</q-btn
      >
      ou
      <q-btn
        class="q-ma-sm bg-white text-black"
        @click="showFormCliente = !showFormCliente"
        >Cadastre-se</q-btn
      >
    </div>
    <!--
    <RouterLink to="/cadastroFilme">Cadastro de Filmes</RouterLink>
    <a href="/cadastroFilme">Cadastro de Filmes</a>
    -->
    <div
      class="q-pa-md row items-center justify-center q-gutter-md"
      v-if="showFormCliente"
    >
      <div style="width: 35em">
        <form-cliente
          @salvarCliente="onSalvarCliente"
          :cliente="{
            id: 0,
            nome: '',
            email: '',
            senha: '',
            telefone: '',
            cpf: '',
          }"
        />
      </div>
    </div>

    <div
      v-if="!naoLogado()"
      class="q-pa-md row items-center justify-center q-gutter-md"
    >
      <div
        v-for="f in filmes"
        v-bind:key="f.id"
        class="col-xs-12 col-sm-6 col-md-4"
      >
        <FilmeCard
          :logado="!naoLogado()"
          :filme="f"
          :diretor="getDiretor(f.id)"
          :atores="getAtores(f.id)"
          @locarFilme="onLocarFilme"
          @comparFilme="onComprarFilme"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import FormCliente from "src/components/FormCliente.vue";
import FormLogin from "src/components/FormLogin.vue";
import Services from "src/services";
import { appStore } from "src/stores/appStore";
import { defineComponent } from "vue";
import FilmeCard from "../components/FilmeCard.vue";
const $q = useQuasar();

export default defineComponent({
  components: { FormCliente, FormLogin, FilmeCard },
  name: "IndexPage",
  data() {
    return {
      filmes: Array,
      showFormCliente: false,
      showFormLogin: false,
    };
  },
  created() {
    Services.getAllFilmes((data) => {
      this.filmes = data.slice(0, 10);
      console.log("Filmes:" + JSON.stringify(this.filmes));
    });
    // Services.getFilmeDirector(filme);
    // Services.getFilmeActors(filme);
  },
  methods: {
    // login() {
    //   appStore.clienteAtual = {
    //     id: 1,
    //     nome: "teste",
    //     email: "",
    //   };
    //   this.showFormCliente = false;
    // },
    onLocarFilme(filme) {
      appStore.carrinho.cliente = appStore.clienteAtual;
      appStore.carrinho.filmes.push(filme);
      appStore.carrinho.data = new Date();
      console.log("CARRINHO: " + JSON.stringify(appStore.carrinho));
    },
    naoLogado() {
      console.log(appStore.clienteAtual == null);
      return appStore.clienteAtual == null;
    },
    getDiretor(filme) {
      return Services.getFilmeDirector(filme);
    },
    getAtores(filme) {
      return Services.getFilmeActors(filme);
    },
    onSalvarCliente(cliente) {
      console.log(cliente);
      if (Services.saveCliente(cliente) == true) {
        this.showFormCliente = false;
        this.showFormLogin = false;
        this.$q.notify({
          message:
            "Cliente cadastrado com sucesso!\nBem vindo, " + cliente.nome + "!",
          color: "positive",
          icon: "check",
        });
      }
    },
    onLoginCliente(cliente) {
      console.log(cliente);
      var usuarioExiste = Services.loginCliente(cliente);
      if (usuarioExiste) {
        this.showFormCliente = false;
        this.showFormLogin = false;
        this.$q.notify({
          message:
            "Cliente logado com sucesso!\nBem vindo de volta, " +
            usuarioExiste.nome +
            "!",
          color: "positive",
          icon: "check",
        });
      } else {
        this.$q.notify({
          message: "Cliente não encontrado.\nPor favor, verifique os dados.",
          color: "negative",
          progress: "true",
          icon: "warning",
        });
      }
    },
  },
});
</script>
