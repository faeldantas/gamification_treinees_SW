import Card from "../Cards";

export default function EscolhaCard(){
    const coresDoFundo = [
        "Verde",
       "Vermelha",
       "Azul",
       "Roxo"
     ]
    return(
        <section className="escolhaCardContainer">
          {coresDoFundo.map( (cor, index) =><Card key={index} cor={cor}/>)}
          
        </section>
    )
}