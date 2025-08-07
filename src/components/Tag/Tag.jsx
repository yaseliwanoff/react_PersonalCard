import styles from "../../styles/blocks/_tag.module.css"

const Tag = ({ tagText }) => {
  const first = tagText[0].toUpperCase();
  const textResult = tagText.replace(/^./, first);

  return (
    <span className={styles.tag}>{textResult}</span>
  )
}

export default Tag;
