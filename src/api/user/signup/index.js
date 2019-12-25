import axios from 'axios';

const signUp = form => axios.post('http://47.93.193.91/gin/user/register',form).then(response => (this.info = response));

export default signUp;