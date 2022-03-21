<template>
  <div class="mt-5">
    <h2 class="text-center">Usuario Registrado</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Curso</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.course }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  props: {
    data: Array,
  },
};
</script>

<style scoped></style>
