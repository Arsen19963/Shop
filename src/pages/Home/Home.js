import React, {useEffect} from "react";
import { connect } from "react-redux";
// import { Footer } from "../../default/footer/Footer";
import { Header } from "../../default/Header/Header";
import { About } from "../../component/about/about";
import "./home.css";
import { HomePageSlider } from "../../component/HomePageSlider/HomePageSlider";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import { Partners } from "../../component/Partners/Partners";
import { TrailCatalog } from "../../component/TrailCatalog/TrailCatalog";

export const Home = ({ catalogue,lang,setLang,languages}) => {
    useEffect(()=>{
        console.log('languages',languages[lang]['about'])
    },[lang])
  return (
    <div>
        <Header lang={lang} setLang={setLang} languages={languages[lang]} />
      <div className={"content homeContent"}>
        <HomePageSlider />
        <About />
      </div>
      <TrailCatalog products={catalogue.products} name={'Catalogue'} button={true}/>
      <JoinTheTeam />
      <Partners  render={true} size={true} />
    </div>
  );
};
export default connect(
  (state) => ({
    catalogue: state.catalogue,
    lang:state.lang,
    languages:state.languages
  }),
    dispatch => ({
        setLang: data => {
            dispatch({type:'ADD_LANG', payload:data})
        }
    })
)(Home);

