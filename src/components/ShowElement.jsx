export default function ShowElement({title, date, location, description, isCurrent, image, link, setlist, concurrence}) {

return(
    <>
    <div className="showElement">
        <div className="showSection" style={!isCurrent? {gap: '20px'} : {}}>
            <div className='showHeader'>
                 <p className="showTitle">{title}</p>
                 <p className="showData">{location} - {date}</p>
                 <p className="showDescription">{description}</p>

            </div>
        {isCurrent? <a className="buyButton" href={link} target="_blank" rel="noopener noreferrer">Comprar</a> :
            <div className='pastShow'>
                
                    <div className="pastShowData"><p className="showDescription">Concurrencia: </p><p style={{color: '#0137AD'}}>{concurrence}</p></div>
                    <div className="pastShowData"><p className="showDescription">Set list: </p><ol style={{color: '#0137AD'}}>{setlist.map((item, index) => <li key={index}>{item}</li>)}</ol></div>
                
            </div> }
        </div>
        <img src={image} />
        

    </div>
    <span className="showFooter">{isCurrent ?  'La fecha y horario del evento se puede ver sujeta a cambios ante cualquier individual. La productora se reserva el derecho a reprogramar o cancelar el show en cualquier momento sin previo aviso' : ''}</span>
    </>


)
}