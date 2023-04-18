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
      newMsgText: "",
      checkMsg: ""
    }
  },

  methods: {
    newMsg(){
      if(this.newMsgText.length > 0){
        const msg = {
          date: dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
          message: this.newMsgText,
          status: 'sent'
        }
        this.contacts[this.index].messages.push(msg);
        this.autoMsg();
        this.newMsgText = "";
      }
    },

    autoMsg(){
      setTimeout(() => {
        const msg = {
          date: dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
          message: "Ok!",
          status: 'received'
        }
        this.contacts[this.index].messages.push(msg);
      }, 1000);
    },

    searchContact(){
      this.contacts.forEach((contact) => {
        contact.visible = contact.name.toLowerCase().includes(this.checkMsg.toLowerCase())
      })
    },

    deleteMessage(msgIndex){
      console.log(msgIndex)
      this.contacts[this.index].messages.splice(msgIndex,1)
    }
  },
}).mount("#app")