<template>
  <q-card class="q-ma-md q-pa-md shadow-10">
    <q-card-section class="bg-primary q-mb-md q-pa-md text-white text-center">
      <h4>Login</h4>
    </q-card-section>
    <q-card-separator />

    <!-- {{ cliente }} -->
    <q-form>
      <q-input
        class="q-mb-sm"
        outlined
        v-model="clienteData.email"
        label="E-mail"
        :rules="[
          (val, rules) =>
            rules.email(val) || 'Por favor, digite um e-mail válido.',
        ]"
      />
      <q-input
        outlined
        type="password"
        v-model="clienteData.senha"
        label="Senha"
      />

      <q-btn
        color="primary"
        label="Entrar"
        class="q-mt-md"
        @click="salvar()"
      ></q-btn>
    </q-form>
  </q-card>
</template>

<script>
// import api from "src/services/api";
export default {
  name: "FormLogin",
  props: {
    cliente: Object,
  },
  data() {
    return {
      clienteData: {
        email: "",
        senha: "",
      },
    };
  },
  created() {
    if (this.cliente) {
      this.clienteData = this.cliente;
    }
  },
  methods: {
    salvar() {
      this.$emit("loginCliente", this.clienteData);
    },
  },
};
</script>

<style></style>
