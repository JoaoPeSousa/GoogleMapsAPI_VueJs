<template>
  <div style="width: 50%; margin: auto; color: white">
    <h1 style="color: white">Fale Conosco!</h1>
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
          v-model="form.name"
          required
          placeholder="Insira seu nome:"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Nacionalidade:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.nacionalidade"
          :options="nacionalidade"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="msg"
        placeholder="Envie sua mensagem..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        msg: '',
        nacionalidade: null
      },
      nacionalidade: [{ text: 'Selecione sua localidade', value: null }, 'America do norte', 'America do Sul', 'Europa', 'Asia'],
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
      this.form.name = ''
      this.form.nacionalidade = null
      this.form.msg = ''
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
