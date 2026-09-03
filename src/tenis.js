class Tenis{
  constructor() {
    this.j1 = 0;
    this.j2 = 0;
  }
  j1Anota(){
    this.j1+=1;
  }
  j2Anota(){
    this.j2+=1;
  }
  obtenerScore(){
    if(this.j1==0 && this.j2==1){
      return "Love-15"
    }
    if(this.j1==0 && this.j2==2){
      return "Love-30"
    }
    if(this.j1==0 && this.j2==3){
      return "Love-40"
    }
    if(this.j1==0 && this.j2==4){
      return "Game for player 2"
    }
    let ansJ1="";
    if(this.j1==0){
      ansJ1="Love"
    }
    else if(this.j1==1){
      ansJ1="15"
    }
    else if(this.j1==2){
      ansJ1="30"
    }
    else if(this.j1==3){
      ansJ1="40"
    }
    else if(this.j1==4){
      return "Game for player 1"
    }
    else{
      ansJ1="30"
    }
    return ansJ1+"-Love";
  }
}

export default Tenis
