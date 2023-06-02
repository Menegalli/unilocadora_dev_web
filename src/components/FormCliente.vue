<template>
  <q-card class="q-ma-md q-pa-md shadow-10">
    <q-card-section class="bg-primary q-mb-md q-pa-md text-white text-center">
      <h4>Cadastro de Cliente</h4>
    </q-card-section>
    <q-card-separator />

    <!-- {{ cliente }} -->
    <q-form>
      <q-input
        class="q-mb-sm"
        outlined
        v-model="clienteData.nome"
        label="Nome"
        :rules="[required]"
      />
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
        class="q-mb-sm"
        outlined
        v-model="clienteData.senha"
        type="password"
        label="Senha"
        :rules="[required]"
      />
      <q-input
        class="q-mb-sm"
        outlined
        type="password"
        v-model="clienteData.confirmarSenha"
        label="Confirmar Senha"
        :rules="[required, matchingPasswords]"
      />
      <q-input
        class="q-mb-sm"
        outlined
        v-model="clienteData.telefone"
        mask="(##)#####.####"
        fill-mask="_"
        label="Telefone"
        :rules="[required]"
      />
      <q-input
        outlined
        v-model="clienteData.cpf"
        label="CPF"
        :rules="[required]"
      />

      <q-btn
        color="primary"
        label="Enviar"
        class="q-mt-md"
        @click="salvar()"
      ></q-btn>
    </q-form>
  </q-card>
</template>

<script>
// import api from "src/services/api";
export default {
  name: "FormCliente",
  props: {
    cliente: Object,
  },
  data() {
    return {
      clienteData: {
        id: 0,
        nome: "",
        senha: "",
        confirmarSenha: "",
        email: "",
        telefone: "",
        cpf: "",
      },
      successPass: false,
      successPass2: false,
    };
  },
  created() {
    if (this.cliente) {
      this.clienteData = this.cliente;
    }
  },
  methods: {
    salvar() {
      this.$emit("salvarCliente", this.clienteData);
    },
    required: function (value) {
      if (value) {
        return true;
      } else {
        return "Este campo é obrigatório.";
      }
    },
    matchingPasswords: function () {
      console.log(this.clienteData);
      if (this.clienteData.senha === this.clienteData.confirmarSenha) {
        return true;
      } else {
        return "Senhas não coincidem.";
      }
    },
  },
};
</script>

<style></style>
