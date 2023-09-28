<template>
  <div class="home-qonnect">
    <img alt="Qonnect logo" src="../assets/qonnect_icon.svg" />
    <h2>Please go to Login Page</h2>
    <h2>Or User Can Input an App Name</h2>
    <input
      type="text"
      v-model="inputValue"
      @keydown.enter="handleEnter"
      placeholder="App Name"
    />
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleEnter(event) {
      if (event.keyCode === 13) {
        if (this.inputValue !== "") {
          location.href = `/${this.inputValue}`;
        }
      }
    },
  },
};
</script>
<style>
.home-qonnect {
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
</style>
