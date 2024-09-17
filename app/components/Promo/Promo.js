import "./promo.css";
import PromoHeading from "../../lesson/PromoHeading";

function Promo(props) {
    //Single source of truth

    const data = {
        heading: "99% off all items!!",
        callToAction: "Everything must go!"
    }

    return (
        <div className="promo-section">
            <PromoHeading 
                heading={data.heading} 
                callToAction={data.callToAction}    
            />
        </div>
    );
}

export default Promo;