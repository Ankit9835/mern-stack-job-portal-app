import { Outlet,Link } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { BigSideBar,SmallSidebar,Navbar } from "../../components"

const SharedLayout = () => {
  return (
    <>
     <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default SharedLayout