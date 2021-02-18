import axios from 'axios';


const api = axios.create({
  baseURL: 'http://192.168.1.105:3333' //Esse ip deve ser o IP que o expo nos informa no navegador para leitura do QRCODE
                                      // OBS: Deve-se mudar também no backend esse ip na área da listagem dos itens para conseguir pegar as imagens.
});

export default api;