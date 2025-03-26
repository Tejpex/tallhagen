import { AddItem } from "../components/AddItem"
import { Item } from "./Item"
import { useEquipment } from "../contexts/EquipmentContext"
//import IceCream from "/ice-cream.png"

export const PackList = () => {
  const { equipment, completeAll } = useEquipment()
  const itemsToPack = equipment.filter((item) => item.done === false)

  if (itemsToPack.length === 0) {
    return (
      <div className="info-box">
        <h2>Packning</h2>
        <p>
          Packa alltid kläder efter årstid – man ska kunna vara ute i alla väder
          utan att frysa eller bli blöt. Tänk också på att det är oömma kläder
          som gäller – kläder som går att smutsa ner och är fria att leka och
          röra sig i.
        </p>
        <h3>Här är en packlista som du kan följa.</h3>
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
          utan att frysa eller bli blöt. Tänk också på att det är oömma kläder
          som gäller – kläder som går att smutsa ner och är fria att leka och
          röra sig i.<br/> <mark>Märk alla dina kläder och saker med namn!</mark>
        </p>
        <h3>Här är en packlista som du kan följa:</h3>
        <p className="site-info">Du kan markera sakerna allt eftersom du packar dem. Möjligheten finns också att ta bort och lägga till saker för att göra listan personlig. Dina ändringar sparas dock inte. Vill du göra det behöver du skriva ut listan.</p>
        <h4>Sova</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Sova")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om du behöver</h4>
        {itemsToPack
          .filter(
            (item) => item.hike === true && item.category === "Extra-sov"
          )
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Kläder</h4>
        <p>Ha gärna på dig scoutskjorta när vi reser till lägret.</p>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Kläder")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om det är kallt (tänk även på temperaturen på kvällar/nätter)</h4>
        {itemsToPack
          .filter(
            (item) => item.hike === true && item.category === "Extra-kläder"
          )
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Skor</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Skor")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {itemsToPack.filter(
          (item) => item.hike === true && item.category === "Skor"
        ).length > 0 && (
          <p>
            Du måste kunna gå en längre sträcka utan att bli blöt om fötterna
            eller få skavsår, så ett par vattentåliga, men samtidigt bekväma
            skor är det bästa alternativet. Klarar dina skor inte ihålligt regn?
            Packa gummistövlar också!
          </p>
        )}
        <h4>Matsaker</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Äta")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Hygien</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Hygien")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Vid behov</h4>
        {itemsToPack
          .filter(
            (item) => item.hike === true && item.category === "Vid behov"
          )
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Övrigt</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Övrigt")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om du vill</h4>
        {itemsToPack
          .filter(
            (item) => item.hike === true && item.category === "Om du vill"
          )
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <p>Tänk på att elektronisk utrustning är känslig för väder och vind, och att det är svårt att hitta ett eluttag i naturen. Om en scout vill ringa hem, kan de låna en telefon av oss ledare. Vårdnadshavare kan också ringa till en ledare om de vill säga något till sin scout.</p>
        <h4>Eftersom lägret är på sommaren 🌞</h4>
        {itemsToPack
          .filter(
            (item) => item.hike === true && item.category === "Sommarsaker"
          )
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {itemsToPack.filter(
          (item) => item.category === "My own"
        ).length > 0 && <h4>Mina egna saker</h4>}
        {itemsToPack
          .filter((item) => item.category === "My own")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Packa i</h4>
        {itemsToPack
          .filter((item) => item.hike === true && item.category === "Väskor")
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {itemsToPack.filter(
          (item) => item.hike === true && item.category === "Väskor"
        ).length > 0 && (
          <p>
            Oftast gör vi dagsutfärder och då måste alla ha en liten ryggsäck med
            regnkläder, vattenflaska och matsaker i.
          </p>
        )}
        <p>OBS!!! Du måste kunna bära hela din packning själv!</p>
        <button onClick={completeAll} className="button">
          Packa allt
        </button>
        <AddItem />
      </div>
    )
  }
}
