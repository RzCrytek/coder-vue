// 1 Construimos nuestro componente - Estos siempre van a tener un template porque vamos a querer pintar muchas etiquetas en HTML
Vue.component('saludo', {
  // 3 Las comillas simples solo funcionan en una linea, asi que usamos literal template
  // 4 Al agregar mas contenido HTML, debemos usar ` y que todo este envuelto en un div / section
  // 5 html como comentario para que funcione la extension es6 string html
  // html

  template: `
    <section id="saludo">
    <h1>{{saludo}}</h1>
    <p>Soy hacker</p>
    </section>
    `,

  // 2 Podemos agregarle data, puntualmente para este componente pero en este caso retorna datos.
  data() {
    return {
      saludo: 'Adios mundo',
    };
  },
});
