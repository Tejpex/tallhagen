import { AddItem } from "../components/AddItem"
import { Item } from "./Item"
import { useEquipment } from "../contexts/EquipmentContext"
//import IceCream from "/ice-cream.png"

export const PackList = () => {
  const isAHike = true
  const { equipment, completeAll } = useEquipment()
  const itemsToPack = equipment.filter((item) => {
    if (item.done === true) return false
    return isAHike ? item.hike === true : true
  })
  const myOwnItems = equipment.filter(
          (item) => item.category === "My own" && item.done === false
        )
  const itemsSleep = itemsToPack.filter((item) => item.category === "Sova") 
  const itemsSleepExtra = itemsToPack.filter((item) => item.category === "Extra-sov")
  const itemsClothing = itemsToPack.filter((item) => item.category === "Kläder")
  const itemsClothingExtra = itemsToPack.filter((item) => item.category === "Extra-kläder")
  const itemsShoes = itemsToPack.filter((item) => item.category === "Skor")
  const itemsMealkit = itemsToPack.filter((item) => item.category === "Äta")
  const itemsHygiene = itemsToPack.filter((item) => item.category === "Hygien")
  const itemsIfNeeded = itemsToPack.filter((item) => item.category === "Vid behov")
  const itemsMisc = itemsToPack.filter((item) => item.category === "Övrigt")
  const itemsIfWanted = itemsToPack.filter((item) => item.category === "Om du vill")
  const itemsBags = itemsToPack.filter((item) => item.category === "Väskor")
  const itemsSummer = itemsToPack.filter((item) => item.category === "Sommarsaker")
          
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
        {itemsSleep.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om du behöver</h4>
        {itemsSleepExtra.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Kläder</h4>
        <p>Ha gärna på dig scoutskjorta när vi reser till lägret.</p>
        {itemsClothing.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om det är kallt (tänk även på temperaturen på kvällar/nätter)</h4>
        {itemsClothingExtra.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Skor</h4>
        {itemsShoes.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {itemsShoes.length > 0 && (
          <p>
            Du måste kunna gå en längre sträcka utan att bli blöt om fötterna
            eller få skavsår, så ett par vattentåliga, men samtidigt bekväma
            skor är det bästa alternativet. Klarar dina skor inte ihålligt regn?
            Packa gummistövlar också!
          </p>
        )}
        <h4>Matsaker</h4>
        {itemsMealkit.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Hygien</h4>
        {itemsHygiene.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Vid behov</h4>
        {itemsIfNeeded.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Övrigt</h4>
        {itemsMisc.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Om du vill</h4>
        {itemsIfWanted.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <p>Tänk på att elektronisk utrustning är känslig för väder och vind, och att det är svårt att hitta ett eluttag i naturen. Om en scout vill ringa hem, kan de låna en telefon av oss ledare. Vårdnadshavare kan också ringa till en ledare om de vill säga något till sin scout.</p>
        <h4>Eftersom lägret är på sommaren 🌞</h4>
        {itemsSummer.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {myOwnItems.length > 0 && <h4>Mina egna saker</h4>}
        {myOwnItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <h4>Packa i</h4>
        {itemsBags.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        {itemsBags.length > 0 && (
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
