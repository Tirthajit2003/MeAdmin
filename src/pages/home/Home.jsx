import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSmall from "../../components/widgetSm/WidgetSmall";
import WidgetLarge from "../../components/widgetLg/WidgetLarge";

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}
