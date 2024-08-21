import Feedback from "./Feedback"


const HeroContact = () => {
  return (
    <>
                <section className="hero">
            <div className="container-hero flex flex-wrap">
                <div className="picture-hero">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3282.2756633011627!2d-58.467991900533605!3d-34.64774055769199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1724278255517!5m2!1ses-419!2sar" width="600" height="450"></iframe>
                </div>
                <div className="tex-hero flex flex-wrap">
                <h1>Grill House</h1>
                <h2>Martínez Castro 1501-1549</h2>
                </div>
            </div>
        </section>
        <div className="mt-[4em] mb-[4em] flex align-center justify-center">
            <Feedback />
        </div>
    </>
  )
}

export default HeroContact