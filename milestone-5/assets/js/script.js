import contacts from "./db.js"
const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
  data(){
    return{
      contacts,
      self: {
        name: "Pierdomenico",
        avatar: "assets/img/avatar_io.png"
      },
      index: 0,
      newMsgText: "",
      checkMsg: "",
      messageIndex: 0,
    }
  },

  methods: {
    newMsg(){
      if(this.newMsgText.length > 0 || this.emoji.length > 0){
        const msg = {
          date: dt.now().setLocale("it").toFormat("dd/MM/yyyy"),
          time: dt.now().setLocale("it").toLocaleString(dt.TIME_24_WITH_SECONDS),
          message: this.newMsgText,
          status: 'sent'
        }
        this.contacts[this.index].messages.push(msg);
        this.autoMsg();
        this.newMsgText = "";
        this.emoji = '';
      }
    },

    autoMsg(){
      setTimeout(() => {
        const msg = {
          date: dt.now().setLocale("it").toFormat("dd/MM/yyyy"),
          time: dt.now().setLocale("it").toLocaleString(dt.TIME_24_WITH_SECONDS),
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
    },

    saveIndex(msgIndex){
      this.messageIndex = msgIndex;
    },
    
    addEmoji(selectedEmoji){
      switch (selectedEmoji) {
        case 1:
          this.newMsgText += ' <i class="fa-solid fa-face-smile fs-5 ps-1" style="color: #f6d32d;"></i>';
          break;

        case 2:
          this.newMsgText += ' <i class="fa-solid fa-face-surprise fs-5 ps-1" style="color: #f6d32d;"></i>';
          break;

        case 3:
          this.newMsgText += ' <i class="fa-solid fa-face-sad-cry fs-5 ps-1" style="color: #f6d32d;"></i>';
          break;

        default:
          this.newMsgText += '';
          break;
      }
    }
  },
}).mount("#app")