import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText
import styles from '../../styles/Home.css'

const Hero = ({heroBanner}) =>{
  return(  
        <div>
            <h1 id='homePageTitle' className={styles.title}>{heroBanner?.fields?.title}</h1>
            <div id='homePagedescription' className={styles.description}>
                {documentToReactComponents(heroBanner?.fields?.heroDescription)}
            </div>
        </div>)
};

export default Hero;
