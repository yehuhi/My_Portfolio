<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <Navbar v-if="screen450" :screenSize="screen450"/>

    <v-toolbar v-if="!screen450"
               dark
               prominent
               outlined
               background-color="#47ff00">

      <v-app-bar-nav-icon @click="drawer = true"
                          style="margin: 5px 2px; color: #ffffff"></v-app-bar-nav-icon>

      <p style="margin: 5px 0 0 5px">
        <span class="title-nav2">
          <span class="first-letter">Y</span>ehuda_<span class="first-letter">P</span>ortfolio</span><span
          style="font-size: 30px; font-weight: bold; color: #47ff00">;</span>
      </p>
    </v-toolbar>
    <div
        id="scrolling-techniques"
        class="scroll-y"
        style="max-height: 600px;"
    ></div>
    <v-navigation-drawer
        v-if="!screen450"
        v-model="drawer"
        dark
        absolute
        temporary
        style="margin-top: 68px"
    >
      <v-list
          nav
          dense
          flat
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">home</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: #47ff00" @click="scrollToId('#home')">Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: #47ff00" @click="scrollToId('#about')">About</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">fa-light fa-diagram-project</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: #47ff00" @click="scrollToId('#projects')">Projects</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">fa-thin fa-message</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: #47ff00" @click="scrollToId('#contactMe')">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <start-front/>
    <v-container fluid class="containe">
      <v-row class="row-1">
        <div>
          <hr class="line">
        </div>
        <div class="my-pic">
          <v-img class="img-location" src="../assets/me.png" contain></v-img>
        </div>

        <div class="about-me">
          <p id="about" class="color-text top txt-up ">About Me
          </p>

          <div class="color-text-subtitle distance-text">
            <p class="distance-text--sub text-sub"> My name is <span class="about-txt">Yehuda Himelfarb</span>, I am
              33 years old from <span class="about-txt"><a class="about-txt about-txt-no-deco"
              href="https://colombia.travel/en/barranquilla" target="_blank">Barranquilla,Colombia</a></span>.
              Father of two beautiful children and I'm also a fullstack web developer.<br>
              After a long time I decided to do something meaningful and fun, so I started <span class="about-txt">
              <a class="about-txt about-txt-no-deco" href="https://vuejs.org/" target="_blank">programming</a></span>,
              I studied at home. After six months I went to <span class="about-txt">
              <a class="about-txt about-txt-no-deco" href="https://flashdev.io/" target="_blank">bootcamp</a></span> to
              bring my programming skills to another
              level.</p>
          </div>
          <div class="color-text-subtitle distance-text">
            <v-btn class="resume-btn"
                   href="https://docs.google.com/document/d/1AxhHH7eKbaRc91sd6lnX24wd5AwSlvGTdqP6ATbTLHo/edit?usp=sharing"
                   target="_blank"
                   rounded dark>
              my resume
            </v-btn>
          </div>
        </div>
        <v-col cols="12" class="padd">
          <div class="first" id="project2">
            <v-row class="first-row row-3">
              <div>
                <hr class="line-2">
              </div>
              <v-col cols="12">
                <p id="projects" class="color-text top txt-up">My Projects
                </p>
                <div class="color-text-subtitle distance-text">
                  <p class="text-subtitle"> La Fabela</p>
                  <p class="distance-text--sub range-text"> A social network built with Vuejs, Vuex, Css,<br>
                    Quasar framework, FireBase, Nodejs and Express.</p>
                  <v-btn class="git-btn-1" href="https://github.com/yehuhi/la-fabela" target="_blank"
                         rounded dark>
                    GitHub
                  </v-btn>
                  <v-btn class="demo-btn-1" href="https://la-fabela.web.app/" target="_blank"
                         rounded dark>
                    Demo
                  </v-btn>
                </div>
                <div class="color-text-subtitle distance-text">
                  <p class="text-subtitle"> Flash Followers Celebs</p>
                  <p class="distance-text--sub range-text"> This app was built by the<br> flashdev students and <br>me
                    (4
                    peoples).<br>
                    We used Vuejs, Vuex, Quasar framework,<br> Firebase, Css, Bitbucket and Jira.</p>
                  <v-dialog
                      transition="dialog-top-transition"
                      max-width="300"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="git-btn-2"
                             rounded
                             dark
                             v-bind="attrs"
                             v-on="on">
                        GitHub
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card color="#414141">
                        <v-toolbar
                            color="#47ff00"
                            dark
                            style="color: black"
                        >Not uploaded yet
                        </v-toolbar>
                        <v-card-text>
                          <div class="text-sm-h6 pa-2" style="color: white">I didn't upload it yet :)</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                              text
                              color="#47ff00"
                              @click="dialog.value = false"
                          >Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                  <v-dialog
                      transition="dialog-top-transition"
                      max-width="300"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="demo-btn-2"
                             rounded
                             dark
                             v-bind="attrs"
                             v-on="on">
                        Demo
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card color="#414141">
                        <v-toolbar
                            color="#47ff00"
                            dark
                            style="color: black"
                        >Not uploaded yet
                        </v-toolbar>
                        <v-card-text>
                          <div class="text-sm-h6 pa-2" style="color: white">I didn't upload it yet :)</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                              text
                              color="#47ff00"
                              @click="dialog.value = false"
                          >Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                </div>
                <div class="color-text-subtitle distance-text">
                  <p class="text-subtitle"> My Portfolio</p>
                  <p class="distance-text--sub">A personal portfolio that was built with Vuejs,<br>
                    Css and Vuetify framework</p>
                  <v-btn class="git-btn-3"
                         href="https://github.com/yehuhi/My_Portfolio" target="_blank"
                         rounded
                         dark>
                    GitHub
                  </v-btn>

                  <v-dialog
                      transition="dialog-top-transition"
                      max-width="300"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="demo-btn-3"
                             rounded
                             dark
                             v-bind="attrs"
                             v-on="on">
                        Demo
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card color="#414141">
                        <v-toolbar
                            color="#47ff00"
                            dark
                            style="color: black"
                        >This web is the demo
                        </v-toolbar>
                        <v-card-text>
                          <div class="text-sm-h6 pa-2" style="color: white">
                            Well, I guess that this is the actual demo so...
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                              text
                              color="#47ff00"
                              @click="dialog.value = false"
                          >Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>


        <v-col cols="12" class="padd2">
          <div class="first" id="project3">
            <v-row class="first-row row-2">
              <div>
                <hr class="line-3">
              </div>
              <v-col cols="12">
                <p id="contactMe" class="color-text top-2 txt-up">Contact Me</p>
                <v-form v-model="valid" class="form">
                  <v-container class="container-txtfree">
                    <div>
                      <v-text-field
                          v-model="fullName"
                          :rules="nameRules"
                          :counter="20"
                          label="Full name*"
                          color="black"
                          filled
                          rounded
                          dense
                          clearable
                          required
                          background-color="#47ff00"
                          prepend-inner-icon="fa-solid fa-user"
                      ></v-text-field>
                    </div>

                    <div>
                      <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail*"
                          color="black"
                          filled
                          rounded
                          dense
                          clearable
                          required
                          background-color="#47ff00"
                          prepend-inner-icon="fa-solid fa-at"
                      ></v-text-field>
                    </div>
                    <div>
                      <v-textarea
                          v-model="messagex"
                          name="input-7-1"
                          label="Write me here..."
                          hint="Hint text"
                          color="black"
                          filled
                          rounded
                          dense
                          clearable
                          required
                          background-color="#47ff00"
                          style="width: 600px"
                          autocomplete
                          prepend-inner-icon="fa-solid fa-message"
                      ></v-textarea>
                    </div>
                    <div>
                      <v-btn class="submit-btn"
                             @click="sendEmail"
                             rounded
                             dark>
                        Submit
                      </v-btn>
                    </div>

                    <v-dialog
                        transition="dialog-top-transition"
                        max-width="300" v-model="emailSubmit"
                    >
                      <template v-slot:default="dialog">
                        <v-card color="#414141">
                          <v-toolbar
                              color="#47ff00"
                              dark
                              style="color: black"
                          >Contact message:
                          </v-toolbar>
                          <v-card-text>
                            <div class="text-sm-h6 pa-2" style="color: white">
                              The message was sent successfully,<br> Thank's!
                            </div>
                          </v-card-text>
                          <v-card-actions class="justify-end">
                            <v-btn
                                text
                                color="#47ff00"
                                @click="dialog.value = false"
                            >Close
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-container>
                </v-form>

              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>


    <v-footer
        style="margin-bottom: -68px; display: flex"
        dark
        padless
    >
      <v-card
          flat
          tile
          width="100%"
      >
        <v-card-text style="display: flex; justify-content: center">
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-2 white--text"
              icon
              @click="goToUrl(icon)"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text"
                     style="display: flex; justify-content: center; padding: 0">
          <strong
          >Created by me - {{ new Date().getFullYear() }}</strong>

        </v-card-text>
      </v-card>
    </v-footer>

    <transition name="fade">
      <div class="fixed left-0 bottom-0 top-btn" v-show="scY > 300" @click="toTop">
        <v-btn fab
               large
               dark
               bottom
               right
               class="top-btn-size">
          <v-icon color="#47ff00">mdi-chevron-up</v-icon>
        </v-btn>
      </div>
    </transition>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import StartFront from "../components/startFront";
import emailjs from 'emailjs-com';


export default {
  name: 'Home',
  components: {
    StartFront,
    Navbar,
  },
  data() {
    return {
      fullName: '',
      email: undefined,
      messagex: '',
      emailSubmit: false,
      scTimer: 0,
      scY: 0,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      screen450: true,
      drawer: false,
      group: null,
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    goToUrl(icon) {
      if (icon === 'mdi-linkedin') {
        window.open("https://www.linkedin.com/in/yehuda-himelfarb-81514a19a/");
      } else if (icon === 'mdi-twitter') {
        window.open("https://twitter.com/");
      } else if (icon === 'mdi-facebook') {
        window.open("https://facebook.com/");
      } else {
        window.open("https://instagram.com/");
      }
    },
    scrollToId(refName) {
      if (refName === '#home') {
        this.drawer = false;
      } else {
        const element = document.querySelector(refName);
        element.scrollIntoView({behavior: 'smooth'});
        this.drawer = false;
      }
    },

    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        if (this.scY < 10) {
          clearTimeout(this.scTimer);
        }
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    sendEmail() {
      // eslint-disable-next-line no-debugger
      debugger
      try {
        emailjs.send('service_66m4mra', 'template_u0cpnyg', {
          to_name: ` i'm ${this.fullName}`,
          from_name: 'Yehuda_Portfolio',
          message: `My email is ${this.email},and ${this.messagex}`
        }, 'user_t7UGGaRJWwsJYYtxAUIIO',).then(() => {
          // Reset form field
          this.fullName = '';
          this.email = '';
          this.messagex = '';
          this.emailSubmit = true;
          this.nameRules = [];
          this.emailRules = [];
        });
      } catch (error) {
        console.log({error})
      }

    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  created() {
    if (screen.width <= 450 ) {
      this.screen450 = false;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.about-txt-no-deco {
  text-decoration: none;
  color: white;
}

.about-txt:hover {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #47ff00;
}

.top-btn {
  bottom: 0;
  position: fixed;
  right: 1%;
  margin: 0 16px 16px 0;
}

.top-btn-size {
  background-color: transparent;
  border: #47ff00 1px solid;
  width: 50px;
  height: 50px
}

.padd {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: -5%;
}

.padd2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: -10%;
}

.my-pic {
  width: 500px;
}

.img-location {
  width: 500px;
  margin: -70px 0 0 100px;
}

.about-me {
  width: 600px
}

.color-text {
  color: dimgrey;
  font-size: 40px
}

.first-letter {
  color: #47ff00;
}

.color-text-subtitle {
  color: #ffffff;
  font-size: 20px
}

.txt-up {
  text-transform: uppercase;
}

.top {
  margin: 45px 0 50px 50px
}

.top-2 {
  margin: 45px 0 50px 170px
}

.distance-text {
  margin: 19px 0 0 50px;
}

.text-subtitle {
  color: #47ff00;
  font-size: 27px;
  margin: 10px 0 20px 0;
}

.distance-text--sub {
  margin: -10px 0 20px 0;
}

.range-text {
  margin-bottom: 60px;
}

.line {
  border: 2px solid #00ff00;
  width: 290px;
  position: absolute;
  left: 60.5%;
  margin-top: 85px;
}

.line-2 {
  border: 2px solid #00ff00;
  width: 400px;
  position: absolute;
  left: 47.5%;
  margin-top: 95px;
}

.line-3 {
  border: 2px solid #00ff00;
  width: 380px;
  position: absolute;
  left: 52%;
  margin-top: 95px;
}

.row-1 {
  margin-top: 70px
}

.row-3 {
  margin-top: -10px
}

.row-2 {
  margin: 100px 0 100px 0
}

.resume-btn {
  color: #47ff00;
  margin: -50px 0 0 410px
}

.git-btn-1 {
  color: #47ff00;
  margin: -230px 0 0 500px
}

.demo-btn-1 {
  color: #47ff00;
  margin: -230px 0 0 20px
}

.git-btn-2 {
  color: #47ff00;
  margin: -300px 0 0 500px
}

.demo-btn-2 {
  color: #47ff00;
  margin: -300px 0 0 20px
}

.git-btn-3 {
  color: #47ff00;
  margin: -130px 0 0 500px
}

.demo-btn-3 {
  color: #47ff00;
  margin: -130px 0 0 20px
}

.submit-btn {
  color: #47ff00;
  margin: 20px 0 0 500px
}

.form {
  margin-left: 190px
}

@media only screen and (min-width: 700px) and (max-width: 830px) {
  * {
    box-sizing: border-box;
  }

  .containe {
    margin-top: -100px;
  }

  .color-text-subtitle {
    font-size: 30px
  }

  .distance-text--sub {
    margin: -10px 0 20px 30px;
  }

  .my-pic {
    width: 800px;
    margin: -50px 0 -100px 0;
  }

  .img-location {
    width: 700px;
    margin: 100px 0 0 30px;
  }

  .about-me {
    width: 750px
  }

  .top {
    margin: 195px 0 50px 50px
  }

  .line {
    border: 2px solid #00ff00;
    width: 455px;
    position: absolute;
    left: 32.5%;
    margin-top: 110px;
  }

  .line-2 {
    border: 2px solid #00ff00;
    width: 400px;
    position: absolute;
    left: 45.5%;
    margin-top: 250px;
  }

  .line-3 {
    border: 2px solid #00ff00;
    width: 340px;
    position: absolute;
    left: 55%;
    margin-top: 95px;
  }

  .git-btn-1 {
    color: #47ff00;
    margin: -30px 0 0 500px
  }

  .demo-btn-1 {
    color: #47ff00;
    margin: -30px 0 0 20px
  }

  .git-btn-2 {
    color: #47ff00;
    margin: -30px 0 0 500px
  }

  .demo-btn-2 {
    color: #47ff00;
    margin: -30px 0 0 20px
  }

  .git-btn-3 {
    color: #47ff00;
    margin: -30px 0 0 500px
  }

  .demo-btn-3 {
    color: #47ff00;
    margin: -30px 0 0 20px
  }

  #about {
    margin: -677px 0 0 55px;
    position: absolute;
  }

  .resume-btn {
    color: #47ff00;
    margin: -30px 0 0 560px
  }

  .form {
    margin-left: 160px;
  }


}

@media only screen and (min-width: 340px) and (max-width: 450px) {

  * {
    box-sizing: border-box;
  }

  .title-nav2 {
    padding: 10px 0 0 10px;
    font-size: 25px;
    font-weight: bold;
    font-family: fantasy;
    color: #ffffff
  }

  .about-me {
    width: 355px
  }

  .text-sub {
    margin-top: 280px
  }


  .img-location {
    position: absolute;
    width: 600px;
    margin: 20px 0 0 -10px;
  }

  .resume-btn {
    color: #47ff00;
    margin: 10px 0 0 80px
  }

  .line {
    border: 1px solid #47ff00;
    margin-top: 118px;
    width: 300px;
    left: 12%;
  }

  .line-2 {
    border: 1px solid #47ff00;
    margin-top: 105px;
    width: 320px;
    left: 15.8%;
  }

  .line-3 {
    border: 1px solid #47ff00;
    margin-top: 105px;
    width: 300px;
    left: 22.5%;
  }

  .row-1 {
    margin-top: 70px
  }

  .row-2 {
    margin: 50px 0 70px 0
  }

  .row-3 {
    margin-top: 60px
  }

  #about {
    margin-top: 67px;
  }

  .top-2 {
    margin: 40px 0 50px 90px
  }

  .git-btn-1 {
    color: #47ff00;
    margin: -90px 0 0 50px
  }

  .demo-btn-1 {
    color: #47ff00;
    margin: -90px 0 0 20px
  }

  .git-btn-2 {
    color: #47ff00;
    margin: -90px 0 0 50px
  }

  .demo-btn-2 {
    color: #47ff00;
    margin: -90px 0 0 20px
  }

  .git-btn-3 {
    color: #47ff00;
    margin: -10px 0 0 50px
  }

  .demo-btn-3 {
    color: #47ff00;
    margin: -10px 0 0 20px
  }

  .submit-btn {
    color: #47ff00;
    margin: 5px 0 0 60px;
    width: 200px;
  }

  .container-txtfree {
    width: 340px
  }

  .form {
    margin-left: 70px
  }
}

@media only screen and (max-width: 320px) {

  .title-nav2 {
    padding: 10px 0 0 5px;
    font-size: 20px;
    font-weight: bold;
    font-family: fantasy;
    color: #ffffff
  }

  .color-text {
    color: dimgrey;
    font-size: 20px;
  }

  .my-pic {
    width: 250px;
  }

  .img-location {
    width: 400px;
    margin: 100px 0 0 15px;
  }

  .color-text-subtitle {
    color: #ffffff;
    font-size: 15px;
  }

  #about {
    margin: -270px 0 0 40px;
    position: absolute;
  }

  .about-me {
    width: 255px
  }

  .my-pic {
    width: 300px;
    margin: -50px 0 -50px -25px;
  }

  .top {
    margin: 45px 0 50px 35px
  }

  .top-2 {
    margin: 40px 0 50px 75px
  }

  .distance-text {
    margin: -10px 0 0 50px;
  }

  .distance-text--sub {
    margin: 0 0 0 -15px;
  }

  .line {
    margin-top: 97px;
    width: 200px;
    left: 14%;
  }

  .line-2 {
    margin-top: 83px;
    width: 210px;
    left: 17%;
  }

  .line-3 {
    margin-top: 80px;
    width: 205px;
    left: 24%;
  }

  .row-1 {
    margin-top: 70px
  }

  .row-2 {
    margin: 30px 0 100px 0
  }

  .row-3 {
    margin-top: 30px
  }

  .text-subtitle {
    color: #47ff00;
    font-size: 27px;
    margin: 70px 0 20px -15px;
  }

  .resume-btn {
    color: #47ff00;
    margin: 30px 0 0 30px
  }

  .git-btn-1 {
    color: #47ff00;
    margin: 10px 0 0 0px
  }

  .demo-btn-1 {
    color: #47ff00;
    margin: 10px 0 0 20px
  }

  .git-btn-2 {
    color: #47ff00;
    margin: 10px 0 0 0px
  }

  .demo-btn-2 {
    color: #47ff00;
    margin: 10px 0 0 20px
  }

  .git-btn-3 {
    color: #47ff00;
    margin: 10px 0 0 0px
  }

  .demo-btn-3 {
    color: #47ff00;
    margin: 10px 0 0 20px
  }

  .container-txtfree {
    width: 240px
  }

  .form {
    margin-left: 60px
  }

  .submit-btn {
    color: #47ff00;
    margin: 5px 0 0 8px;
    width: 200px;
  }

  .top-btn {
    bottom: 0;
    position: fixed;
    right: 1%;
    margin: 0 16px 26px 0;
  }
}

</style>
