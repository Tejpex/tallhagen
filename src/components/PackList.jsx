import { Item } from "./Item"
import { useEquipment } from "../contexts/EquipmentContext"
//import IceCream from "/ice-cream.png"

export const PackList = () => {
  const { equipment, completeAll } = useEquipment()

  if (equipment.filter((item) => item.done === false).length === 0) {
    return (
      <div className="empty-state">
        {/*<img src={IceCream} alt="Icon of ice cream" className="empty-state-pic"/>*/}
        <p>Packad och klar! Vi ses på lägret.</p>
      </div>
    )
  } else {
    return (
      <div className="info-box">
        <h2>Packning</h2>
        <p>
        Packa alltid kläder efter årstid – man ska kunna vara ute i alla väder
        utan att frysa eller bli blöt. Tänk också på att det är oömma kläder som
        gäller – kläder som går att smutsa ner och är fria att leka och röra sig
        i.
        </p>
        <h3>Här är en packlista som du kan följa.</h3>
        {equipment
          .filter((item) => item.done === false)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <div className="count-tasks">
          <p>Du har {equipment.filter((task) => task.done === false).length} saker kvar att packa.</p>
          <button onClick={completeAll} className="move-all">Packa allt</button>
        </div>
      </div>
    )
  }
}


     /* 
      Eventuellt: Halsduk Långkalsonger Och om du vill: Kudde Sovsäckslakan
      Gosedjur Äta: Matsaker (, , ) Tvätta sig: Necessär Vid behov: Mediciner
      Hudlotion Deodorant Trosskydd/Bindor/Tamponger Snoddar + Hårspännen
      Skavsårsplåster Övrigt: Penna + Papper Kniv (om du har knivbevis) Och om
      du vill: Ficklampa Kamera + Batterier Sittunderlag Lägerbålsfilt Nål och
      tråd Om lägret är på sommaren: Shorts eller Kjol Sandaler eller liknande
      Myggmedel Solkräm Badkläder Badhandduk Skor: Gummistövlar + Skor att leka
      ute i, som passar årstiden eller Vandrarkängor Viktigt att tänka på med
      skor är att man ska kunna gå en längre sträcka utan att bli blöt om
      fötterna, så ett par vattentåliga, men samtidigt bekväma skor är det bästa
      alternativet. Packa i: Stor ryggsäck/Bag Liten ryggsäck Oftast gör vi
      dagsutfärder då alla måste ha en liten ryggsäck med regnkläder,
      vattenflaska och matsaker i. Reseklädsel: Scoutskjorta, Scouthalsduk och
      Sölja om du har det. I övrigt: kläder efter väder. Man ska alltid kunna
      bära all sin packning själv!
    </div>
  );
};*/
