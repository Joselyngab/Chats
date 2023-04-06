import api from "./axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const chat = {
    async getChats() {
        try {
            const resp = await api.get("chats", config);
          return resp;
          
        } catch (error) {
    
          return error;
        }
      },
};

export default chat;