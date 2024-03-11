import { TiTick } from "react-icons/ti";
import { RxCross2, RxTextAlignCenter } from "react-icons/rx";
function Card({item}){
    return  <div className='col'>
    <div class="card mb-4 shadow-sm">
  <div class="card-header">
    <h4 className="my-0 font-weight-normal"><div className="text-muted">{item.plan}</div></h4>
    <h1 className="card-title pricing-card-title">${item.price} / month</h1>

  </div>
  <div className="card-body">
    <ul className="list-unstyled mt-3 mb-4">
      {
        item.features.map((features,index)=>{
            return <li key={index}>
                {
                    features.enable ? <p className="correct"><TiTick />{features.name}</p> 
                    : <p className="text-muted"><RxCross2 />{features.name}</p>
                }
            </li>
        })
      }
    </ul>
    <button type="button" className="btn btn-primary">Buy</button>
  </div>
</div>

    </div>
}
export default Card