import axios from 'axios';

const signIn = (form) => {
    axios
    .post('/gin/user/login',form)
    .then(
        function (response) {
            if(response.data.status == 0){
                alert("登录成功，正在跳转");
                window.location.href = '/';
            } else {
                alert("登录失败，请重新登录")
            }
    }
    )

};

export default signIn;