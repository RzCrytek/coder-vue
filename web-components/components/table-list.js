Vue.component('table-list', {
  template: `
    <div>
      <h2 class="text-center">{{ title }}</h2>

      <table class="table table-striped" :class="background">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Año</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  props: {
    title: String,
    data: Array,
    background: String,
  },
});
