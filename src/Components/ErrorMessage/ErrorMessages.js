import React, { Children } from 'react'
import { ErrorMess } from '../../GlobalStyle/ErrorsStyle'

function ErrorMessages({children}) {
    return (
       <ErrorMess>
       {children}
       </ErrorMess> 
    )
}

export default ErrorMessages
