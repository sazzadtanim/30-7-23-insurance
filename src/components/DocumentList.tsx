import React from 'react'
import DocumentDetails from './DocumentDetails'

export default function DocumentList() {
  return (
    <div className='flex flex-col gap-4'>
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='activeHistory'
      />
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='inactiveHistory'
      />
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='inactiveHistory'
      />
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='inactiveHistory'
      />
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='inactiveHistory'
      />
      <DocumentDetails
        description={`Este documento detalla los términos y condiciones del seguro de automóvil proporcionado por Mapfre. Cubre aspectos como...`}
        title={`Terminos_y_Condiciones_Seguro_Automovil_Mapfre.pdf`}
        usedAs='inactiveHistory'
      />
    </div>
  )
}
