<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="" style="color: black; font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif">Sistema de Apoio ao Visitante</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="itemNav" href="" ><router-link class="routerNav" style="text-decoration: none;  font-size: 17px;" to="/">Inicio</router-link></b-nav-item>
          <b-nav-item class="itemNav" href="#"><router-link class="routerNav" style="text-decoration: none;  font-size: 17px" to="/FaleConosco">Fale Conosco</router-link></b-nav-item>
          <b-nav-item class="itemNav" href="#"><router-link class="routerNav" style="text-decoration: none;  font-size: 17px" to="/LoginCadastro">Login</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.routerNav{
  color: white;
}
.routerNav:hover {
 color: white;
  text-shadow: black;
}
</style>
