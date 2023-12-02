'use client'

import Title from "../../../components/Titlle/Title"
import PaymentSelection from "../../../components/payment-selection/Payment-selection"
import './styles.css'

export default function Payment() {
  return(
    <main>
      <Title>NEW ESTÉTICA</Title>
      <div className="box-politcs-payment">
        <h3>Como funciona o nosso pagamento?</h3>
        <div className="box-politcs-payment-text">
          <p>Ligula placeat expedita eiusmod temporibus exercitationem dolores sociis? Euismod! Tristique ridiculus numquam orci adipisci 
            magnam assumenda. Facilis, sint. Est maiores sit. Etiam? Primis? Lacus condimentum corrupti, aliquam! Phasellus, pretium per, 
            et aperiam, etiam ullamco consequatur culpa, auctor praesentium, omnis asperiores? Adipisicing rhoncus amet fugit cumque orci 
            suspendisse tenetur.
          </p>
          <p>Ligula placeat expedita eiusmod temporibus exercitationem dolores sociis? Euismod! Tristique ridiculus numquam orci adipisci 
            magnam assumenda. Facilis, sint. Est maiores sit. Etiam? Primis? Lacus condimentum corrupti, aliquam! Phasellus, pretium per, 
            et aperiam, etiam ullamco consequatur culpa, auctor praesentium, omnis asperiores? Adipisicing rhoncus amet fugit cumque orci 
            suspendisse tenetur.
          </p>
        </div>
      </div>
      <PaymentSelection />
    </main>
      
    
  )
}