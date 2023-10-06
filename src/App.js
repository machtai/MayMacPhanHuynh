
import { Navbar } from './components/Navbar/Navbar';
import { CarouselDefault } from "./components/Swip/CarouselDefault";
import Reason from "./components/Reason/ListReason";
import ProductCardGrid from "./components/ListProducts/ListProduct";
import ColumnContact from './components/ColumnContact/ColumnContact';
import ImgFreeShip from './components/ImgFreeShip/ImgFreeShip';
import PartnerSwiper from './components/partner/PartnerSwipers';
import Location from './components/Map/Map';
import NewsPage from './components/News/NewsPage';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App overflow-x-hidden bg-white">
    <Navbar />
    <CarouselDefault />
    <ProductCardGrid />
    <Reason />
   <ImgFreeShip/>
   <Location/>
    <PartnerSwiper/>
  <NewsPage/>
    <Footer/>
    
    
    <ColumnContact />
    </div>
  );
}

export default App;
