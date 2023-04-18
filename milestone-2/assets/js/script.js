import contacts from "./db.js"
const {createApp} = Vue;

createApp({
  data(){
    return{
      contacts,
      self: {
        name: "Pierdomenico",
        avatar: "assets/img/avatar_io.jpg"
      },
      index: 0
    }
  }
}).mount("#app")