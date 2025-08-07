import styles from "../../styles/blocks/_card.module.css"

const CardButton = ({ key, cardIcon, cardText, cardLink }) => {
  return (
    <a key={key} href={cardLink} className={styles.card__button}>
      <span className={styles.card__icon}>{cardIcon}</span>
      <p className={styles.card__text}>{cardText}</p>
    </a>
  )
}

export default CardButton;
