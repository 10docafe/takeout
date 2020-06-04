<template>
  <v-app>
    <header>
      <v-card width="100%">
        <v-app-bar
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          src="./assets/cafe.jpg"
          scroll-target="#scrolling-techniques-2"
        >
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
          </template>

          <v-toolbar-title>10°CAFE TAKEOUT</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>

        <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
          <v-container style="height: 130px;"></v-container>
        </v-sheet>
      </v-card>
    </header>

    <router-view></router-view>

    <!--
    <v-footer>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          src="./assets/cafe.jpg"
          scroll-target="#scrolling-techniques-2"
        >
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
          </template>

          <v-card-text class="text-center contact">
            <br />
            <strong>Contact info</strong>
            <p>03-6912-6109</p>
            <p>10docafe@gmail.com</p>
            <a to="https://twitter.com/10docafe" icon target="_blank">
              <v-icon color="#55acee" size="70px" class="twitter">mdi-twitter</v-icon>
            </a>
            <a to="https://www.instagram.com/10docafe" icon target="_blank">
              <v-icon color="#d93177" size="70px" class="instagram">mdi-instagram</v-icon>
            </a>
            <hr class="socket" />
            <span>&copy;10°CAFE All Rights Reserved.</span>
          </v-card-text>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="1500">
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
      </v-card>
    </v-footer>
    -->
    <footer>
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center contact">
            <strong>Contact info</strong>
            <p>03-6912-6109</p>
            <p>10docafe@gmail.com</p>
            <a href="https://twitter.com/10docafe" target="_blank">
              <v-icon color="#55acee" size="70px" class="twitter">mdi-twitter</v-icon>
            </a>
            <a href="https://www.instagram.com/10docafe" target="_blank">
              <v-icon color="#d93177" size="70px" class="instagram">mdi-instagram</v-icon>
            </a>
            <hr class="socket" />
            <span>&copy;10°CAFE All Rights Reserved.</span>
          </div>
        </v-col>
      </v-row>
    </footer>
  </v-app>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

import Vue from "vue";

export default {
  name: "App",

  components: {},

  data: () => ({
    data: "",
    apiLoading: false,
    initialized: false,
    loggedIn: false,
    inClient: ""
  }),
  created() {
    this.initializeLiff();
  },
  methods: {
    initializeLiff() {
      this.apiLoading = true;
      liff.init(
        { liffId: "1654260645-M3kxyvpv" },
        data => {
          this.data = data;
          console.log(data);
          //this.initialized = true;
          this.loggedIn = liff.isLoggedIn();
          this.inClient = liff.isInClient();
          if (this.loggedIn === true) {
            // ログイン済み
            console.log("Logged in!!");
          } else {
            console.log("Not logged in!!");
          }
          this.apiLoading = false;
        },
        err => {
          console.log("LIFF initialization failed", err);
          this.apiLoading = false;
        }
      );
    }
  }
};
</script>

<style>
.v-application a {
  color: transparent !important;
}
</style>

<style scoped>
.contact {
  font-size: 2rem;
}

header {
  font-family: "Big Shoulders Display", cursive;
}

footer {
  background: linear-gradient(
      -45deg,
      rgba(19, 84, 122, 0.5),
      rgba(128, 208, 199, 0.8)
    ),
    url("./assets/cafe.jpg");
  background-size: cover;
  font-family: "Big Shoulders Display", cursive;
  background-size: cover;
  color: black;
  padding: 2rem 0 2rem;
  margin-top: 4rem;
}

hr.socket {
  text-align: center;
  width: 100%;
  border-top: 0.2rem solid #666b71;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

span {
  font-size: 1.5rem;
}
</style>

<style lang="scss">
* :not(.v-icon) {
  font-family: "Big Shoulders Display", cursive;
}
.v-label .theme--light {
  font-family: "Big Shoulders Display", cursive !important;
}
</style>