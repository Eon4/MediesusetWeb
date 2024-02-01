import style from './Infopage.module.scss'
import MapImg from "../../assets/img/mediesuset-map.jpg"
import MapImg02 from "../../assets/img/googlemap.png"

export const Infopage = () => {
  return (
    <div className={style.infopage}>
      <h1>Her finder du os</h1>
      <div className={style.gridContainer}>
        <div className={style.mapContainer}>
          <img
            src={MapImg} 
            alt="Map"
            className={style.mapImage}
          />
          <img
            src={MapImg02} 
            alt="Map"
            className={style.mapImage}
          />
        </div>
        <div className={style.addressContainer}>
          <h2>Adresse:</h2>
          <p className={style.address}>
            Øster Uttrup Vej 1,          
            <br />
            9000 Aalborg
            <br />
            Denmark
          </p>
        </div>
      </div>
    </div>
  );
};