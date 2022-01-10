<template>
  <header class="header" id="header">
    <div class="header__toggle">
      <i class="bx bx-menu" id="header-toggle"></i>
    </div>

    <div class="header__img">
      <a href="">
        <img src="img/logo/logo.png" alt="" />
      </a>
    </div>
    <div>
      <form action="">
        <button class="btn btn1" @click="logout()">Log Out</button>
      </form>
    </div>
  </header>

  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div>
        <a href="" class="nav__logo">
          <i class="bx bxs-home nav__logo-icon"></i>
          <span class="nav__logo-name">Academy Code</span>
        </a>

        <div class="nav__list">
          <a href="" class="nav__link">
            <i class="fas fa-user-plus nav__icon"></i>
            <span class="nav__name">Add Etudiant</span>
          </a>

          <a href="" class="nav__link">
            <i class="fas fa-pen nav__icon"></i>
            <span class="nav__name">Add Seance</span>
          </a>

          <a href="" class="nav__link">
            <i class="fas fa-tasks nav__icon"></i>
            <span class="nav__name">Note & Absences</span>
          </a>
        </div>
      </div>

      <a href="" class="nav__link">
        <i class="bx bx-log-out nav__icon"></i>
        <span class="nav__name" @click="logout()">Log Out</span>
      </a>
    </nav>
  </div>

  <!-- Start Etudiant table -->
  <table style="overflow-x: auto">
    <caption>
      Liste des Etudiants
    </caption>

    <thead>
      <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td data-column="Nom">{{ student.firstName }}</td>
        <td data-column="Prenom">{{ student.lastName }}</td>
        <td data-column="Action">
          <i
            style="margin-right: 10px; cursor: pointer"
            class="fas fa-edit"
          ></i>
          <i
            style="margin-right: 10px; cursor: pointer"
            class="far fa-trash-alt"
            @click="delStudent(student.id)"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- end  Etudiant table -->
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      token: sessionStorage.getItem("token"),
      students: [],
    };
  },

  mounted() {
    /*===== SHOW NAVBAR  =====*/
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          // show navbar
          nav.classList.toggle("show");
          // change icon
          toggle.classList.toggle("bx-x");
          // add padding to body
          bodypd.classList.toggle("body-pd");
          // add padding to header
          headerpd.classList.toggle("body-pd");
        });
      }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");

    /*===== LINK ACTIVE  =====*/
    const linkColor = document.querySelectorAll(".nav__link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));
  },

  methods: {
    allStudent() {
      axios
        .get("http://localhost:3006/api/v1/students/", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => (this.students = res.data.students))
        .catch((err) => {
          console.log(err);
        });
    },
    delStudent(id) {
      axios
        .delete(`http://localhost:3006/api/v1/students/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          this.students = res.data.students;
          this.allStudent();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout: function () {
      sessionStorage.removeItem("token");
      this.$router.push({ name: "Login" });
    },
  },
  beforeMount() {
    this.allStudent();
  },
};
</script>