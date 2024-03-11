<template>
  <div>
    <div id="loader-div" class="text-center hide">
      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <section class="fluid-container">
      <div class="row justify-content-around m-3">
        <div class="col-5">
          <div class="input-group mb-3">
            <input id="number-records" type="text" class="form-control" placeholder="100 for default"
              aria-label="100 for default" aria-describedby="button-addon2" value="100" />
            <button class="btn btn-outline-primary" type="button" id="button-addon2" disabled>
              Elementos a Mostrar
            </button>
          </div>
        </div>

        <div class="col-5">
          <div class="input-group mb-3">
            <input type="button" class="btn btn-secondary" value="Consultar Datos de la Tabla" onclick="consultar()" />
          </div>
        </div>
      </div>

      <div class="row justify-content-around m-3">
        <div class="col-5">
          <div class="input-group mb-3">
            <input id="Filter-name" type="text" class="form-control" placeholder="Filter Elements table"
              aria-label="Filter username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-primary" type="button" id="button-addon2" disabled>
              Filtrar registros
            </button>
          </div>
        </div>

        <div class="col-5">
          <div class="input-group mb-3">
            <input type="button" class="btn btn-danger" value="Eliminar todos los Elementos"
              onclick="location.reload();" />
          </div>
        </div>
      </div>

      <table id="table-Api" class="table">
        <caption>Lista de usuarios</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Pais</th>
            <th scope="col">Num Tel</th>
            <th scope="col" class="">Perfil</th>
            <th scope="col" class="">Eliminar</th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr v-for="(user, index) in responseData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.name.first }} {{ user.name.last }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.location.country }}</td>
          <td>{{ user.phone }}</td>
          <td class=" rounded-image"><img :src="user.picture.thumbnail" alt="Perfil"></td>
          <td><button class="btn btn-danger" @click="deleteRow(index)">Eliminar</button></td>
        </tr>
        </tbody>
      </table>
      <div id="pagination"></div>
    </section>
  </div>

</template>

<script>
export default {
  data() {
    return {
      responseData: null,
    };
  },
  methods: {
    fetchData() {
      this.$axios.get('https://randomuser.me/api/?results=10')
        .then(response => {
          this.responseData = response.data.results;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    deleteRow(index) {
      this.responseData.splice(index, 1);
    },
  },
  mounted() {
    this.fetchData();
  },
};



</script>



<style scoped>
.hide {
  display: none;
}

.loader-div-spinner {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background-color: #fff;
  opacity: .8;
  cursor: none !important;
}

.rounded-image img {
  border-radius: 50%;
}

</style>
