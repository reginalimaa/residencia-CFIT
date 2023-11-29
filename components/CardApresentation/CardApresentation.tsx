
import './styles.css'

export default function CardApresentation( { title = "", text= "", values = "" } ){
  return (
    <section className='section-apresentation'>
      
      <h1>{title}</h1>
      <p>{text}</p>
      <h3>{values}</h3>
      <div className='div-icons'>

      </div>
    </section>
  )

}