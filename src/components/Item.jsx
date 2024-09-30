import styles from"./item.module.css"
export default function Item({item}){
    return <div>
        <div className={styles.itemContainer}> 
            <div className={styles.imageContainer}>
            <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100X100/${item.image}`} alt="lele" />
            </div>
            <div>
                <div className={styles.nameContainer}>
                    <div key={item.item} className={styles.name}>{item.name}</div>
                    <div key={item.item} className={styles.amount}>{item.amount}{item.unit}</div> 
                </div>
            
            </div>
            
        </div>
    </div>
}