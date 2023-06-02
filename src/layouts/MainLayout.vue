<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar class="text-white">
          <q-icon name="movie" size="2rem" />
        </q-avatar>

        <q-toolbar-title> Unilocadora </q-toolbar-title>
        <q-btn
          round
          color="black"
          icon="shopping_cart"
          v-if="mostraCarrinho()"
          @click="toggleOpenCarrinho"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer side="right" v-model="carrinhoOpen" bordered>
      <q-list>
        <q-item-label header class="text-black text-bold">
          Carrinho
        </q-item-label>
        <q-separator class="q-mb-md" />
        <FilmeItem v-for="f in filmes" v-bind:key="f.id" :filme="f" />
        <q-separator class="q-mb-md" />
        <q-btn color="secondary" @click="salvarCarrinho()"
          >Fechar e Salvar Carrinho</q-btn
        >
      </q-list>
    </q-drawer>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header class="text-black text-bold"> Menu </q-item-label>
        <q-separator class="q-mb-md" />

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { appStore } from "src/stores/appStore";
import FilmeItem from "src/components/FilmeItem.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const linksList = [
  {
    title: "Inicio",
    caption: "Ir para a página inicial",
    icon: "home",
    link: "/",
  },
  {
    title: "Filmes",
    caption: "Ir para os Filmes",
    icon: "movie",
    link: "/",
  },
  // {
  //   title: "Discord Chat Channel",
  //   caption: "chat.quasar.dev",
  //   icon: "chat",
  //   link: "https://chat.quasar.dev",
  // },
  // {
  //   title: "Forum",
  //   caption: "forum.quasar.dev",
  //   icon: "record_voice_over",
  //   link: "https://forum.quasar.dev",
  // },
  // {
  //   title: "Twitter",
  //   caption: "@quasarframework",
  //   icon: "rss_feed",
  //   link: "https://twitter.quasar.dev",
  // },
  // {
  //   title: "Facebook",
  //   caption: "@QuasarFramework",
  //   icon: "public",
  //   link: "https://facebook.quasar.dev",
  // },
  // {
  //   title: "Quasar Awesome",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    FilmeItem,
  },
  methods: {
    mostraCarrinho() {
      return (
        appStore.carrinho.cliente != null && appStore.carrinho.filmes.length > 0
      );
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const carrinhoOpen = ref(false);
    const filmes = [];

    return {
      essentialLinks: linksList,
      filmes: appStore.carrinho.filmes,
      leftDrawerOpen,
      carrinhoOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleOpenCarrinho() {
        carrinhoOpen.value = !carrinhoOpen.value;
      },
      salvarCarrinho() {
        this.toggleOpenCarrinho();
        this.$q.notify({
          message:
            "Carrinho salvo com sucesso!\nAproveite os Filmes, " +
            appStore.clienteAtual.nome +
            "!",
          color: "positive",
          icon: "check",
        });
      },
    };
  },
});
</script>
