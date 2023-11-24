// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss';

function CustomLogin() {
  const navigateTo = useNavigate();

  const [loginData, setLoginData] = useState({
    usuario: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const usuarios = await response.json();

        const usuario = usuarios.find((u) => u.usuario === loginData.usuario && u.senha === loginData.senha);

        if (usuario) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          navigateTo('/home');
        } else {
          alert("Usuário/senha inválidos");
          setLoginData({
            usuario: '',
            senha: '',
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='idUsuario'></label>
          <input
            type="text"
            name="usuario"
            value={loginData.usuario}
            placeholder='Digite seu usuário'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='idSenha'></label>
          <input
            type="password"
            name="senha"
            value={loginData.senha}
            placeholder='Digite sua senha'
            onChange={handleChange}
          />
        </div>
        <button type="submit">LOGAR</button>
      </form>
    </div>
  )
}

export default CustomLogin;

