import React from "react";
import "./ChatIntro.css";
import whatsAppLogoIntro from "../Assets/whatsAppIntro.jpg";

export default () => {
  return (
    <div className="chatIntro">
      <img src={whatsAppLogoIntro} alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte o seu telefone a uma rede Wi-Fi
      </h2>
    </div>
  );
};
