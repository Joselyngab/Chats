import api from "./axios";

const config = {
    async getConfig() {
        try {
            const resp = await api.get("config");
          return resp;
          
        } catch (error) {
    
          return error;
        }
      },

    async changeConfig(body) {
        try {
          console.log("body", body);
            const resp = await api.post("config", body);
            return resp;
        
        } catch (error) {

            return error;
        }
    }
};

export default config;