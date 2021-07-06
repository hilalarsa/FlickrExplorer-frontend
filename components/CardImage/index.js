import Image from 'next/image'
import styles from './style.module.css'
import { Chip } from '@material-ui/core'
const CardImage = ({ data }) => {
    return (
        <>
            <div className={styles.card}>
                {/* <div
                dangerouslySetInnerHTML={{
                    __html: data.description,
                }}
            ></div> */}
                <div className={styles.image}>
                    <Image
                        width="200px"
                        height="200px"
                        src={data.media.m}
                        alt={data.description}
                    />
                </div>
                <div className={styles.cardinfo}>
                    <div className={styles.description}>{data.title ? data.title.slice(0, 50) : "No Title"}</div>
                    <div className={styles.title}>
                        Author:
                        {data.author.match(/\"(.*?)\"/g) != null
                            ? data.author
                                  .match(/\"(.*?)\"/g)[0]
                                  .replace(/"/g, ' ')
                            : data.author}
                    </div>
                    <div>
                        Tags:
                        {data.tags ? (
                            data.tags.split(' ').map((chip, index) => {
                                return (
                                    <Chip
                                        className={styles.chip}
                                        label={chip}
                                    />
                                )
                            })
                        ) : (
                            <Chip className={styles.chip} label="No Tags" />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardImage
