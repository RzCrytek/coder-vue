Vue.component('hijo', {
  //html
  template: `   
    <section id="hijo">
        <h4>Componente hijo</h4>
        <h5>{{numero}}</h5>
        <!-- 11 transmitir datos del hijo al padre -->
        <p>{{nombre}}</p>
    </section>
    `,

  // props para la comunicacion
  props: ['numero'],
  data() {
    return {
      nombre: 'Niki',
    };
  },
});
