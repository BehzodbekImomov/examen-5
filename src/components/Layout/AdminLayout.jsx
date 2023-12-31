import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const AdminLayout = () => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default AdminLayout