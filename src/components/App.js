import React from 'react';

import PlacarContainer from './PlacarContainer'


const dados={
  partida: {
    estadio:"Maracanã/RJ",
    data:"01/06/2016",
    horario: "19h",
  },
  casa:{
    name:"Flamengo",
  },  
  visitante:{
    name:"Vasco",
  },
  
};

export default class App extends React.Component {
  render() {
    return (
        <PlacarContainer {...dados} />
    )
  }
}