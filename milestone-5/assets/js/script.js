import contacts from "./db.js"
import replyArray from "./reply-db.js"
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
      checkTxt: "",
      messageIndex: 0,
      darkMode: false,
    }
  },

  methods: {
    newMsg(){
      if(this.newMsgText.length > 0 || this.emoji.length > 0){
        const msg = {
          date: dt.now().setLocale("it").toFormat("dd/MM/yyyy"),
          time: dt.now().setLocale("it").toLocaleString(dt.TIME_24_WITH_SECONDS),
          message: this.newMsgText,
          status: 'sent',
          visible: true
        }
        this.contacts[this.index].messages.push(msg);
        this.scrollUp();
        this.autoMsg();
        this.newMsgText = "";
        this.emoji = '';
      }
    },

    autoMsg(){
      const randomIndex = Math.floor(Math.random()*replyArray.length)+ 1
      setTimeout(() => {
        const msg = {
          date: dt.now().setLocale("it").toFormat("dd/MM/yyyy"),
          time: dt.now().setLocale("it").toLocaleString(dt.TIME_24_WITH_SECONDS),
          message: replyArray[randomIndex],
          status: 'received',
          visible: true
        }
        this.scrollUp();
        this.contacts[this.index].messages.push(msg);
      }, 1000);
    },

    scrollUp(){
      setTimeout(() => {
        const chat = document.querySelector('.pg-chat-wrapper');
        chat.scrollTop = chat.scrollHeight;
      }, 1);
    },

    searchContact(){
      this.contacts.forEach((contact) => {
        contact.visible = contact.name.toLowerCase().includes(this.checkMsg.toLowerCase())
      })
    },

    searchMsg(){
      this.contacts[this.index].messages.forEach((txt) => {
        txt.visible = txt.message.toLowerCase().includes(this.checkTxt.toLowerCase())
      })
    },

    deleteMessage(msgIndex){
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
          
        case 4:
          this.newMsgText += ` <i class="fa-solid fa-face-smile-beam fs-5 ps-1" style="color: #f6d32d;"></i>`;
          break;
        
        case 5:
          this.newMsgText += ` <i class="fa-solid fa-face-kiss-wink-heart fs-5 ps-1" style="color: #f6d32d;"></i>`;
          break;

        case 6:
          this.newMsgText += ` <i class="fa-solid fa-face-meh-blank fs-5 ps-1" style="color: #f6d32d;"></i>`;
          break;

        case 7:
          this.newMsgText += ` <i class="fa-solid fa-face-grin-hearts fs-5 ps-1" style="color: #f6d32d;"></i>`;
          break;

        case 8:
          this.newMsgText += ` <i class="fa-solid fa-face-smile-wink fs-5 ps-1" style="color: #f6d32d;"></i>`;
          break;

        case 9:
          this.newMsgText += ` <i class="fa-solid fa-face-angry fs-5 ps-1" style="color: #e01b24;"></i>`;
          break;

        default:
          this.newMsgText += '';
          break;
      }
    }
  },
}).mount("#app")