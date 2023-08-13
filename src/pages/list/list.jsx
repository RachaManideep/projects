import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const list = () => {
  return (
    <div>
        <Navbar/>
        <Header type = 'list'/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitile">Search</h1>
            </div>
            <div className="listresult"></div>
          </div>
        </div>
    </div>
  )
}

export default list
