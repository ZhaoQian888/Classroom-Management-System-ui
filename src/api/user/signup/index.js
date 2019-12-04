import axios from 'axios';

const signUp = form => axios.post('gin/user/register',form).then(res=>res.data);

export default signUp;