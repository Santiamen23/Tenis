class Tenis{
  constructor() {
    this.j1 = 0;
  }
  j1Anota(){
    this.j1+=1;
  }
  obtenerScore(){
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
    else{
      ansJ1="30"
    }
    return ansJ1+"-Love";
  }
}

export default Tenis
