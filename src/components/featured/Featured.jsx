import "./featured.css";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">&#8377;2,415</span>
                <span className="featuredMoneyRate">-11.2 <ArrowDownward className="featuredIcon -ve"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">&#8377;6,415</span>
                <span className="featuredMoneyRate">-0.4 <ArrowDownward className="featuredIcon -ve" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">&#8377;1,465</span>
                <span className="featuredMoneyRate">+1.2<ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>

  )
}
