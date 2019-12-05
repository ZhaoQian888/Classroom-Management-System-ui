import axios from 'axios';

const signIn = form => axios.post('gin/user/login',form).then(res=>res.data);

export default signIn;