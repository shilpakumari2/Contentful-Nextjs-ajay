import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText
import styles from '../../styles/Home.css'

const Home = ({homePage}) =>{
  return(  
        <div>
            <h1 id='homePageTitle' className={styles.title}>{homePage?.fields?.homePageTitle}</h1>
            <div id='homePagedescription' className={styles.description}>
                {documentToReactComponents(homePage?.fields?.homePageDescription)}
            </div>
        </div>)
};

export default Home;
