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
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      />

      <div class="checkbox">
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        <label for="rememberMe">Remember me</label>
      </div>

      <button class="btn btn1">Register</button>
      <router-link to="/login" class="btn">Singn in</router-link>
    </div>

    <img class="login--img" src="@/assets/img/login-img.jpg" alt="education" />
  </div>
</template>