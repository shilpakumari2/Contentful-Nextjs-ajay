import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText
import client from '../lib/contentful';
import styles from '../styles/Home.module.css';


const Home = ({ homePage }) => {
  return (
    <div>
      <h1 id='homePageTitle' className={styles.title}>{homePage.fields.homePageTitle}</h1>
      <div id='homePagedescription' className={styles.description}>
        {documentToReactComponents(homePage.fields.homePageDescription)}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await client.getEntries({
      content_type: 'homePage',  
    });

    const homePage = res.items[0];

    return {
      props: {
        homePage,  
      },
    };
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return {
      props: {
        homePage: null,
      },
    };
  }
}

export default Home;
