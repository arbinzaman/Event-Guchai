
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Components/Layouts/Routes/Routes'
import Loader from './Components/Shared/Loader/Loader'

function App() {

  return (
    <>
       <div className="max-w-screen-xl mx-auto">
      <RouterProvider fallbackElement={<Loader></Loader>} router={router}></RouterProvider>

    </div>
    </>
  )
}

export default App
