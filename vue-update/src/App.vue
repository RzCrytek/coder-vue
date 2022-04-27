<template>
  <div id="app" class="container">
    <TableList title="Señor de los anillos" :data="movies" background="table-dark" />
    <TableList title="Series" :data="series" background="table-success" />
    <TableList title="Animes" :data="animes" background="table-warning" />
  </div>
</template>

<script>
import TableList from './components/TableList.vue';

export default {
  name: 'App',
  components: {
    TableList,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: 'La Comunidad del Anillo',
          category: 'Acción',
          year: 2001,
        },
        {
          id: 2,
          name: 'Las dos torres',
          category: 'Fantasía',
          year: 2002,
        },
        {
          id: 3,
          name: 'El retorno del Rey	',
          category: 'Aventura',
          year: 2003,
        },
      ],

      series: [
        {
          id: 1,
          name: 'Breaking bad',
          category: 'Crimen',
          year: 2008,
        },
        {
          id: 2,
          name: 'Peaky blinders',
          category: 'Drama',
          year: 2013,
        },
        {
          id: 3,
          name: 'Shooter',
          category: 'Acción',
          year: 2016,
        },
      ],

      animes: [
        {
          id: 1,
          name: 'Shingeki no kyojin',
          category: 'Acción',
          year: 2009,
        },
        {
          id: 2,
          name: 'Kimetsu no yaiba',
          category: 'Acción',
          year: 2016,
        },
        {
          id: 3,
          name: 'One piece',
          category: 'Acción',
          year: 1997,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
