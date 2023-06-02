<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-icon
        :name="`img:https://image.tmdb.org/t/p/original/${filme.poster_path}`"
      >
      </q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold">{{ filme.title }}</q-item-label>
      <q-item-label class="text-italic" caption>{{
        filme.overview
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilmeItem",
  props: {
    filme: Object,
  },
});
</script>
