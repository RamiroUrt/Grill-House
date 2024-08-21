import '../assets/css/Cards.css'

// eslint-disable-next-line react/prop-types
const CardInfo = ({tittle, info}) => {
  return (
    <>
    <div className="border-card">
        <div className="card-cont">
                <div className="text">
                    <h2 className="tittle">{tittle}</h2>
                </div>
                <div className="text-info">
                    <p className=''>{info}</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default CardInfo