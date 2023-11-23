import React from 'react';
import userIcon from '../../src/img/perfil.png'; 
import './UserProfile.css';
import Image from 'next/image';

function UserProfile() {
  return (
    <div className="user-profile">
      <Image src={userIcon} alt="User Icon" width={30} height={30} />
      <div className="user-info">
        <p>Olá, Usuário</p>
        <p>Entre ou Cadastre-se</p>
      </div>
    </div>
  );
}

export default UserProfile;