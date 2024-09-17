function PromoHeading(props){
    return (
        <div className="promo-heading">
             <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.callToAction}</h2>
            </div>
        </div>
    );
};

export default PromoHeading;