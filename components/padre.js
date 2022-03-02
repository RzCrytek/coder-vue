Vue.component('padre', {
  //html
  template: `
    <!-- 7 - Un componente puede contener a otro, agregamos al componente hijo-->
    <section id="padre">
        <h4>Componente Padre: {{numeroPadre}}</h4> 
        <!-- 8 Podemos usar las props - nos permiten hacer comunicacion entre componentes -->  
        <hijo numero="5"></hijo>
    
        <!-- 9 -->
        <hijo :numero="numeroPadre"></hijo> 
        <!-- 10 directiva para aprovechar el dato dinamico / despues de esto ir al componente hijo --> 
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
    </section>
    `,
  // 9 que el hijo reciba el numeroPadre, para que cada vez que se cambie en el padre, se modifique en el hijo, como lo hacemos? con v-bind:
  data() {
    return {
      numeroPadre: 0,
    };
  },
});
