<template>
  <div class="scroll-canvas">
    <div class="css-1jciaoi">
      <div class="css-3iwqj4">
        <div class="css-1yyz87g">
          <img
            class="css-1woe985"
            src="../assets/qonnect_icon.svg"
            alt="Grafana"
          />
          <div class="css-1w4npsm">
            <h1 class="css-1eqpw1q">Welcome to Qonnect {{ username }}</h1>
          </div>
        </div>
        <div class="css-9h8xxw">
          <div class="css-1t0mszb">
            <div class="css-lcb2lo">
              <form class="css-xs0vux" id="form-UserManagement">
                <div class="css-8e5b3">
                  <button
                    v-if="username === ''"
                    class="css-1daj7gy-button"
                    aria-label="Login button"
                    type="button"
                    @click="callLogin()"
                  >
                    <span class="css-1mhnkuh">เข้าสู่ระบบ</span>
                  </button>
                  <div v-else>
                    <span> {{ username }}</span>
                    <button style="color: red" type="button" @click="logout()">
                      Logout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aad from "../store/aad";
import { LamdaAcknow, LoginSilo } from "../store/login";

export default {
  data() {
    return {
      username: "",
    };
  },
  created() {
    aad.getAccount().then((account) => {
      if (account !== null) {
        this.username = account.userName;
        console.log(account);
      }
    });
  },
  methods: {
    async callLogin() {
      try {
        const account = await aad.login();

        if (account !== null) {
          this.username = account.userName;
          const result = await LamdaAcknow(account.userName);
          if (result.message == "Login") {
            LoginSilo(account.userName);
          }
        } else {
          alert("ไม่สามารถเข้าสู่ระบบ");
        }
      } catch (error) {
        // console.error("An error occurred:", error);
      }
    },
    logout() {
      aad.logout();
    },
  },
};
</script>
<style>
.css-1yyz87g {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
}
.css-9h8xxw {
  display: flex;
  overflow-y: hidden;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-1t0mszb {
  padding: 2px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 415px;
  width: 100%;
  transform: translate(0px, 0px);
  transition: all 0.25s ease 0s;
  animation: 0.2s ease-out 0s 1 normal none running animation-16t86o;
}
.css-lcb2lo {
  width: 100%;
  padding-bottom: 16px;
}
.css-xs0vux {
  /* max-width: 600px; */
  width: 100%;
}
.css-8e5b3 {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.css-1daj7gy-button {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  margin-top: 20px;
  padding: 0px 16px;
  height: 32px;
  line-height: 30px;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid rgb(50, 116, 217);
  border-radius: 2px;
  background: linear-gradient(rgb(50, 116, 217) 0%, rgb(31, 96, 196) 100%);
  color: rgb(255, 255, 255);
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
}
.css-1jciaoi {
  background: url(../assets/login_background_dark.svg) center center / cover
    no-repeat rgb(0, 0, 0);
  min-height: 100vh;
  min-width: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.css-3iwqj4 {
  max-width: 550px;
  width: 100%;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1;
  min-height: 320px;
  border-radius: 3px;
  padding: 20px 0px;
  background: 0% 0% / cover rgba(18, 28, 41, 0.65);
}
body {
  font-family: Roboto, Helvetica Neue, Arial, sans-serif;
  line-height: 1.5;
  color: #c7d0d9;
  font-size: 14px;
}
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.scroll-canvas {
  position: absolute;
  width: 100%;
  overflow: auto;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.main-view {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  background: #141619;
}
.css-1bjepp-input-input {
  background-color: rgb(11, 12, 14);
  line-height: 1.5;
  font-size: 14px;
  color: rgb(199, 208, 217);
  border: 1px solid rgb(44, 50, 53);
  padding: 0px;
  position: relative;
  z-index: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  border-radius: 2px;
  height: 100%;
  min-height: 35px;
  width: 100%;
}
.css-1eqpw1q {
  font-size: 32px;
  color: white;
}
</style>
