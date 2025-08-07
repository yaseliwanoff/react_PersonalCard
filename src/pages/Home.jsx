import styles from "../styles/blocks/_card.module.css"
import Tag from "../components/Tag/Tag"
import CardButton from "../components/CardButton/CardButton"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Video from "../assets/videos/video.mp4.download/video.mp4"

const Home = () => {
  const cardButtons = [
    {
      "id": 0,
      "link": "https://github.com/yaseliwanoff",
      "icon": <FaGithub />,
      "text": "GitHub",
    },
    {
      "id": 1,
      "link": "https://t.me/yselivanovv",
      "icon": <FaTelegramPlane />,
      "text": "Telegram",
    },
    {
      "id": 2,
      "link": "email:yselivanov857@gmail.com",
      "icon": <MdEmail />,
      "text": "Email",
    },
  ]
  
  return (
    <>
      <div className="container">
        <div className={styles.card__block}>
          <Tag tagText={"frontend developer"} />
          <h1 className={styles.card__title}>Yaroslav Selivanov</h1>
          <div className={styles.card__description}>
            <p>Hello, my name is Yaroslav, I am engaged in frontend development</p>
          </div>
          <div className={styles.buttons__list}>
            { cardButtons.map((button) => (
              <CardButton
                key={button.id}
                cardLink={button.link}
                cardIcon={button.icon}
                cardText={button.text}
              />
            ) ) }
          </div>
          <button type="submit" className={styles.dowalonds__button}>Dowloand CV</button>
        </div>
      </div>
    </>
  )
}

export default Home;
