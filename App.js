import React from 'react'
import {Wrapper} from './src/Component/StateManagement/Wrapper'
import Container from './Container'
import {initState} from './src/Component/StateManagement/Reduer'
import reducer from './src/Component/StateManagement/Reduer'



const App = () => {
  return (
    <Wrapper initState={initState} reducer={reducer} >
      <Container/>
    </Wrapper>
  )
}

export default App