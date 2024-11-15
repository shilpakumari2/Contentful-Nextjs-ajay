import Home from '@/components/HomePage';
import Hero from '../components/HeroBanner'; 
import client from '@/lib/contentful'; 
import styles from '../styles/Home.css';  

const Main = ({ homePage, heroBanner }) => {
  return (
    <div className={styles.container}>
      <Home homePage={homePage} />
      <Hero heroBanner={heroBanner} />
    </div>
  );
};

export async function getStaticProps() {
  try {

    const resHome = await client.getEntries({
      content_type: 'homePage',  
    });

    const res = await client.getEntries({
      content_type: 'heroBanner',
    });

    const homePage = resHome.items[0];
    const heroBanner = res.items[0]; 
    return {
      props: {
        homePage,
        heroBanner,
      },
    };
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return {
      props: {
        homePage: null,
        heroBanner: null, 
      },
    };
  }
}

export default Main;
