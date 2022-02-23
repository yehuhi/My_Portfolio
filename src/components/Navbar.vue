<template>
  <v-app-bar v-if="screenSize" color="transparent" app flat hide-on-scroll class="px-8">
    <span class="title-nav"><span class="first-letter">Y</span>ehuda_<span
        class="first-letter">P</span>ortfolio</span><span
      style="font-size: 30px; font-weight: bold; color: #47ff00; margin: 10px 0 0 3px">;</span>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" color="#51ff0c"><span class="nav-refs-home">Home</span>
    </v-btn>
    <v-btn text @click="scroll('#about')" color="#ffffff"><span class="nav-refs">About</span></v-btn>
    <v-btn text @click="scroll('#projects')" color="#ffffff"><span class="nav-refs">Projects</span></v-btn>
    <v-btn text @click="scroll('#contactMe')" color="#ffffff"><span class="nav-refs">Contact</span></v-btn>
    <p id="topo"></p>
  </v-app-bar>


</template>

<script>
export default {
  name: "Navbar",
  props: ['screenSize'],
  data() {
    return {}
  },
  methods: {
    scroll(refName) {
      const element = document.querySelector(refName);
      element.scrollIntoView({behavior: 'smooth'});
    }
  },
  created() {
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.first-letter {
  color: #47ff00;
}

.nav-refs-home {
  font-family: "Niagara Engraved", fantasy;
  font-size: 20px;
}

.nav-refs {
  font-family: "Niagara Engraved", fantasy;
  font-size: 20px;
}

.icon {
  background-color: transparent;
  animation-name: icon-navbar;
  animation-duration: 4s;
}

@keyframes icon-navbar {
  from {
    background-color: #ffffff;
  }
  to {
    background-color: #ffffff;
  }
}

.title-nav {
  padding: 10px 0 0 10px;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Niagara Engraved', fantasy;
  color: #ffffff
}

@media only screen and (min-width: 700px) and (max-width: 830px) {
  * {
    box-sizing: border-box;
  }

  .title-nav {
    padding: 10px 0 0 -5px;
    font-size: 25px;
    font-weight: bold;
    font-family: fantasy, Arial, Helvetica, sans-serif;
    color: #ffffff
  }

  .nav-refs-home {
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 15px;
    margin-left: 30px;
  }

  .nav-refs {
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 15px;
  }

}
</style>