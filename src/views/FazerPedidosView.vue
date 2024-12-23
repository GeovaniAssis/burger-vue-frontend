<template>
  <div class="fazerPedidos">
    <BannerPrincipal/>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="titulo">Monte o seu hamburguer:</h2>
          <p>As opções podem levar até 50 segundos para serem carregadas devido à inicialização do servidor. Agradecemos pela sua paciência.</p>
        </div>
      </div>

      <BurgerForm />
    </div>

  </div>
</template>

<script>
    import BannerPrincipal from './../components/BannerPrincipal'
    import BurgerForm from './../components/BurgerForm'
    
    export default {
      name: 'FazerPedidos',
      components: {
        BannerPrincipal,
        BurgerForm
      }
    }
</script>
