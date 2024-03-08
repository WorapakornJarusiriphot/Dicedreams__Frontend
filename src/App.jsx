import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
// import InputFileUpload from './components/FileUpload'
// import RegistrationForm from './Page/SignUp'
// import EbookFormMui from './Page/Add-book page'
import BookEditForm from './Page/edit-book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      {/* <InputFileUpload /> */}
      {/* <RegistrationForm /> */}
      {/* <EbookFormMui /> */}
      <BookEditForm />
    </>
  )
}

export default App
