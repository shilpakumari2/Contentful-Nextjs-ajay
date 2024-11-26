import { documentToReactComponents } from '@contentful/rich-text-react-renderer';  // Import for rendering RichText

const Hero = ({heroBanner}) =>{
  return(  
        <div>
            <h1 id='homePageTitle' className="title">{heroBanner?.fields?.title}</h1>
            <div id='homePagedescription' className="description">
                {documentToReactComponents(heroBanner?.fields?.heroDescription)}
            </div>
        </div>)
};

export default Hero;
