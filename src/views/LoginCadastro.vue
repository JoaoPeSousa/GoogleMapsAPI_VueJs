<template>
  <div style="width: 50%; margin: auto; color: white">
    <h1 style="color: white">Login/Cadastro</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="Seu email para entrarmos em contato"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Insira o seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Seu nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.senha"
          type="password"
          required
          placeholder="Insira sua senha:"
        ></b-form-input>
      </b-form-group>

      - Não possui cadastro? -

      <b-form-group id="input-group-3" label="Seu email:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email2"
          type="text"
          required
          placeholder="Insira sua senha:"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Sua senha:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password2"
          type="password"
          required
          placeholder="Insira sua senha:"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Seu número de celular:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.cel"
          type="password"
          required
          placeholder="Insira seu celular para verificação:"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        email2: '',
        cel: '',
        password2: '',
        senha: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.email2 = ''
      this.form.senha = ''
      this.form.cel = ''
      this.form.password2 = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
label {
  color: white;
}
</style>
