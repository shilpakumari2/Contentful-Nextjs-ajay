import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText

const Home = ({homePage}) =>{
  return(  
        <div>
            <h1 id='homePageTitle' className="title">{homePage?.fields?.homePageTitle}</h1>
            <div id='homePagedescription' className="description">
                {documentToReactComponents(homePage?.fields?.homePageDescription)}
            </div>
        </div>)
};

export default Home;
