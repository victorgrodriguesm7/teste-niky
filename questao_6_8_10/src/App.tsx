import { CategoryManagement, CategoryTab, SearchHeader, SideBar } from "./components"
import './app.css';

function App() {

  return (
    <>
      <SideBar/>
      <main className="main-container">
        <SearchHeader/>
        <section className="main-content">
          <CategoryTab/>
          <CategoryManagement/>
        </section>
      </main>
    </>
  )
}

export default App
