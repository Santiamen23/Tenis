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
    if(this.j1>=3 && this.j2>=3){
      if(this.j1==this.j2){
        return "Deuce"
      }
      if(this.j1==this.j2+1){
        return "Advantage for player 1"
      }
      if(this.j2==this.j1+1){
        return "Advantage for player 2"
      }
      if(this.j1>this.j2){
        return "Game for player 1"
      }
      return "Game for player 2"
    }
    const scores=["Love", "15", "30", "40"];
    if(this.j1>=4){
      return "Game for player 1"
    }
    if(this.j2>=4){
      return "Game for player 2"
    }
    return scores[this.j1]+"-"+scores[this.j2];
  }
}

export default Tenis
