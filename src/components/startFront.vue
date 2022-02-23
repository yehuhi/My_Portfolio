<template>
  <!--  <v-app>-->
  <div style="width: 100%; position: relative">
    <v-img class="img-opacity" src="../assets/picFont.jpeg">
      <div class="title-name-img">YEHUDA<br v-if="!screen450"> HIMELFARB</div>
      <div class="title-img">FULL STACK WEB<br v-if="!screen450"> DEVELOPER</div>
    </v-img>
  </div>
  <!--  </v-app>-->
</template>

<script>

export default {
  name: "startFront",
  components: {},
  data() {
    return {
      screen450: true
    }
  },
  methods: {},
  created() {
    if (screen.width <= 450) {
      this.screen450 = false;
      console.log(this.screen450, 'SCREEN SIZE')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.img-opacity {
  display: flex;
  width: 100%;
  height: 90%;
  margin-top: -70px;
  border-bottom: #47ff00 1px solid;
  border-radius: 0% 0% 300% 0% / 50% 50% 600% 100%;
}

.title-name-img {
  font-family: 'Niagara Engraved', fantasy;
  font-size: 100px;
  color: #ffffff;
  filter: contrast(100%);
  position: relative;
  text-align: center;
  top: 250px;
  letter-spacing: 15px;
}

.title-img {
  font-family: 'Niagara Engraved', fantasy;
  font-size: 55px;
  font-weight: bold;
  color: #47ff00;
  position: relative;
  text-align: center;
  top: 220px;
  letter-spacing: 3px;
}

@media only screen and (min-width: 700px) and (max-width: 830px) {
  * {
    box-sizing: border-box;
  }

  .img-opacity {
    display: flex;
    width: 100%;
    height: 1100px;
    margin: -70px 0 260px 0;
    border-bottom: #47ff00 1px solid;
    border-radius: 0% 0% 300% 0% / 50% 50% 600% 100%;
  }

  .title-name-img {
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 80px;
    color: #ffffff;
    filter: contrast(100%);
    position: relative;
    text-align: center;
    top: 400px;
    letter-spacing: 15px;
  }

  .title-img {
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #47ff00;
    position: relative;
    text-align: center;
    top: 360px;
    letter-spacing: 3px;
  }
}


@media only screen and (max-width: 450px) {
  * {
    box-sizing: border-box;
  }

  .img-opacity {
    margin-top: -60px;
    height: 600px;
    border-radius: 0 0 100% 0 / 50% 50% 100% 0;
  }

  .title-name-img {
    width: 100%;
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 39px;
    font-weight: bold;
    color: #ffffff;
    filter: contrast(100%);
    position: relative;
    text-align: center;
    margin-top: -80px;
    letter-spacing: 15px;
  }

  .title-img {
    font-family: fantasy, Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: bold;
    color: #47ff00;
    position: relative;
    text-align: center;
    margin: 15px 0 0 -12px;
    letter-spacing: 3px;
  }
}


@media only screen and (max-width: 320px) {
  * {
    box-sizing: border-box;
  }

  .img-opacity {
    margin-top: -60px;
    height: 350px;
    border-radius: 0 0 300% 0 / 50% 50% 100% 100%;
  }

  .title-name-img {
    font-family: fantasy;
    font-size: 27px;
    margin: -130px 0 0 7px;
  }

  .title-img {
    font-family: fantasy;
    font-size: 19px;
    margin: 30px 0 0 0;
  }

}
</style>