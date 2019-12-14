import axios from 'axios';

const signIn = (form) => {axios.post('gin/user/login',form).then((res)=>{alert(res.data)})};

export default signIn;