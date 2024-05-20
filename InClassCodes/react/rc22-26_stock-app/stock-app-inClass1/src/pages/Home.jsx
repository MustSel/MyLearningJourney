import resim from "../assets/develop.jpg"
import Charts from "../components/Charts";
import KPICards from "../components/KPICards";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";

const Home = () => {
const {getDatas} = useStockRequest();
  useEffect(() => {
    getDatas("sales")
    getDatas("purchases")

  }, [])
  return (
    <div>
      {/* <img style={{display:"block", margin:"auto"}} src={resim} alt="..." /> */}
    <KPICards/>
    <Charts/>
    </div>
  );
};

export default Home;
