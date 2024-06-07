import React from 'react';
import './Login.css';
import Logo from './Logo.tsx';
const LoginBox = () => {
    const loginGithub = () => {
        const clientId = 'Ov23ctSFUM79jnRHlICe';
        const redirectUri = 'https://alexanderjson.github.io/damp-projekt/';
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
        window.location.href = url;

    }

return (
        <div>
          
            <Logo />
            <button onClick={loginGithub}>LOGIN</button>
        </div>
);
};
export default LoginBox; //kolla extends