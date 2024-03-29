import style from "./newsCard.module.scss";

export const NewsCard = ({ imgSrc, title, text, handleModal }) => {
  return (
    <div className={style.newsCardStyle}>
      <img src={imgSrc}></img>
      <section>
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={() => handleModal()}>Læs mere</button>
      </section>
    </div>
  );
};