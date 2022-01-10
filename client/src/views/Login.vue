<template>
  <div class="login">
    <div class="login--form">
      <h2>Welcome back</h2>
      <h3>welcom back! Please enter yourd etails.</h3>

      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        v-model="form.email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        v-model="form.password"
      />

      <div class="checkbox">
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        <label for="rememberMe">Remember me</label>
      </div>

      <button class="btn btn1" @click="login()">Singn in</button>
      <router-link to="/register" class="btn">Register</router-link>
    </div>

    <img class="login--img" src="@/assets/img/login-img.jpg" alt="education" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: null,
      form: {
        email: null,
        password: null,
      },
      errors: {},
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3006/api/v1/login", this.form)
        .then((res) => {
          console.log(res.data.accessToken);
          this.token = res.data.accessToken;
          sessionStorage.setItem("token", this.token);
          this.$router.push({ name: "Teacher", params: { token: this.token } });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    beforeMount() {
      if (sessionStorage.getItem("token")) {
        this.$router.push({ name: "Teacher" });
      }
    },
  },
};
</script>