import axiosInstance from "../plugins/axios";

class FormService {
  static getByPath(formPath) {
    return axiosInstance.get('https://api-gw-t.testuniqa.pl/formio/form?type=form&path=' + formPath)
      .catch((error) => {
        console.error(error);
        throw error;
      })
    }
  }
  
  export default FormService;