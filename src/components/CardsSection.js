import Card from './Card';

function CardsSection() {
    return (
        <section className="container-md text-center" style={{background: "yellow"}}>
          <div className="row gx-5 m-auto">
            <div className="col-lg-4 col-md-12 mb-4"><Card /></div>
            <div className="col-lg-4 col-md-12 mb-4"><Card /></div>
            <div className="col-lg-4 col-md-12 mb-4"><Card /></div>
          </div>
        </section>
    );
  }
  
  export default CardsSection;
  