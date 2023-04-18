import contacts from "./db.js"
const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
  data(){
    return{
      contacts,
      self: {
        name: "Pierdomenico",
        avatar: "assets/img/avatar_io.jpg"
      },
      index: 0,
      newMsgText: ""
    }
  },

  methods: {
    newMsg(){
      const msg = {
        date: dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
        message: this.newMsgText,
        status: 'sent'
      }
      this.contacts[this.index].messages.push(msg);
      this.autoMsg();
      this.newMsgText = "";
    },
  }
}).mount("#app")