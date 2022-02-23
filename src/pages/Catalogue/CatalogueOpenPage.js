import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import "./CatalogueOpenPage.css";
import {Link} from "react-router-dom";
import {ProductCard} from "../../component/ProductCard/ProductCard";
import {TrailCatalog} from "../../component/TrailCatalog/TrailCatalog";
import {Header} from "../../default/Header/Header";

const CatalogueOpenPage = ({match, catalogue, lang, setLang, languages}) => {
    const [data, setData] = useState(null);
    const {id} = match.params;
    useEffect(() => {
        let item = catalogue.products.find(
            (x) => x.id.toString() === id.toString()
        );
        setData(item);
        console.log(setData(item));
    }, [id]);
    if (data) {
        return (
            <div>
            <Header lang={lang} setLang={setLang} languages={languages[lang]} />
            <div className={"content catalogueOpenPage"}>


                <div className={'catalogueOpenPageFlexing'}>
                    <div className="catalogueOpenPageLeft">
                        <div className="catalogueOpenPageImg">
                            <img src={data.image}/>
                        </div>
                    </div>
                    <div className={"catalogueOpenPagText"}>
                        <div className={"catalogueOpenPageName"}>{data.name}</div>
                        <div className={"catalogueOpenPageDescription"}>Weight: {data.weight} or grams</div>
                        <div className={"catalogueOpenPageIntroduction"}>{data.some}</div>
                    </div>
                </div>
                <div className="alsoProducts">
                    {/*<div className="alsoProductsTitle"> */}
                    {/*    <p>Also you can be interested in:</p>*/}
                    {/*</div>*/}
                    <div className={'productList'}>
                        {/*{catalogue.products.map((item, index) => (*/}
                        {/*    <ProductCard  item={item} catalogPage={true}/>*/}
                        {/*))}*/}
                        <TrailCatalog buttonNone={true} products={catalogue.products} name={'Also you can be interested in:'}/>
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
        return null;
    }
};
export default connect(
    (state) => ({
        catalogue: state.catalogue,
        lang: state.lang,
        languages: state.languages
    }),
    dispatch => ({
        setLang: data => {
            dispatch({type:'ADD_LANG', payload:data})
        }
    })
)(CatalogueOpenPage);
