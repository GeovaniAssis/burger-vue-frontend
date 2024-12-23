<template>
  <div class="pedidos">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="titulo">Gerenciar pedidos:</h2>
        </div>
      </div>
    </div>


    <Dashboard/>
  </div>
</template>

<script>
    import Dashboard from './../components/Dashboard'
    
    export default {
      name: 'Pedidos',
      components: {
        Dashboard
      }
    }
</script>