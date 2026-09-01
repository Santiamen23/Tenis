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
    else{
      ansJ1="15"
    }
    return ansJ1+"-Love";
  }
}

export default Tenis