<template>
  <div id="app">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <form action="" @submit.prevent="handleSubmit">
            <h1 class="text-center">Formulario de Registro</h1>

            <div v-if="submitted">
              <div v-if="hasErrors" class="alert alert-danger" role="alert">
                <strong>Se han producido los siguientes errores:</strong>
                <ul>
                  <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
              </div>
              <div v-else class="alert alert-success" role="alert">
                <strong>Enviado!</strong>
              </div>
            </div>

            <div v-else class="mb-3 text-center">
              <strong>Completa este formulario</strong>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input id="name" class="form-control" type="text" name="name" v-model="name" />
            </div>

            <div class="mb-3">
              <label for="lastname" class="form-label">Apellidos</label>
              <input id="lastname" class="form-control" type="text" name="lastname" v-model="lastname" />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Correo</label>
              <input id="email" class="form-control" type="email" name="email" v-model="email" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input id="password" class="form-control" type="password" name="password" v-model="password" />
            </div>

            <label for="" class="form-label">Cursos</label>
            <select class="form-select mb-3" aria-label="Default select example" v-model="course">
              <option selected disabled value="">Seleccione algún curso</option>
              <option v-for="course in courses" :value="course.value" :key="course.key">{{ course.text }}</option>
            </select>

            <button type="submit" class="btn btn-primary">Registrar</button>
          </form>

          <table-list v-if="submitted" :data="user"></table-list>
        </div>
      </div>
    </div>
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
      errors: [],
      name: '',
      lastname: '',
      email: '',
      password: '',
      course: '',
      submitted: false,
      expression: /\w+@\w+\.+[a-z]/,
      courses: [
        { text: 'Vue', value: 'vue' },
        { text: 'React', value: 'react' },
        { text: 'Angular', value: 'angular' },
      ],
      user: [],
    };
  },
  methods: {
    handleSubmit(e) {
      this.errors = [];
      this.submitted = true;

      console.log('submit');

      if (this.name && this.lastname && this.email && this.password && this.course && this.expression.test(this.email)) {
        this.user.push({
          id: new Date().getTime(),
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          course: this.course,
        });

        this.name = this.lastname = this.email = this.password = this.course = '';
        e.target.reset();

        return true;
      }

      if (!this.name) this.errors.push('Nombre requerido');
      if (!this.lastname) this.errors.push('Apellido requerido');
      if (!this.email) this.errors.push('Email requerido');
      if (!this.password) this.errors.push('Password requerido');
      if (!this.course) this.errors.push('Curso requerido');
      if (!this.expression.test(this.email)) this.errors.push('Formato de email incorrecto');
    },
  },
  computed: {
    hasErrors: function () {
      return !!this.errors.length;
    },
  },
};
</script>
