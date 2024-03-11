import './App.css'
import Card from './card'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
function App() {

let data = [
  {
    plan:"Free",
    price : 0,
    features: [
      {
        name: "Single User",
        enable: true,
      },
      {
        name: "50GB Storage",
        enable: true,
      },
      {
        name: "Unlimited Public Projects",
        enable: true,
      },
      {
        name: "Community Access",
        enable: true,
      },
      {
        name: "Unlimited Private Projects",
        enable: false,
      },
      {
        name: "Dedicated Phone Support",
        enable: false,
      },
      {
        name: "Free Subdomain",
        enable: false,
      },
      {
        name: "Monthly Status Reports",
        enable: false,
      }
    ],
  },
  {
    plan:"Plus",
    price: 9,
    features: [
      {
        name: "5 Users",
        enable: true,
      },
      {
        name: "50GB Storage",
        enable: true,
      },
      {
        name: "Unlimited Public Projects",
        enable: true,
      },
      {
        name: "Community Access",
        enable: true,
      },
      {
        name: "Unlimited Private Projects",
        enable: true,
      },
      {
        name: "Dedicated Phone Support",
        enable: true,
      },
      {
        name: "Free Subdomain",
        enable: true,
      },
      {
        name: "Monthly Status Reports",
        enable: false,
      }
    ],
  },
  {
    plan:"Pro",
    price :49,
    features: [
      {
        name: "Unlimited Users",
        enable: true,
      },
      {
        name: "50GB Storage",
        enable: true,
      },
      {
        name: "Unlimited Public Projects",
        enable: true,
      },
      {
        name: "Community Access",
        enable: true,
      },
      {
        name: "Unlimited Private Projects",
        enable: true,
      },
      {
        name: "Dedicated Phone Support",
        enable: true,
      },
      {
        name: "Free Subdomain",
        enable: true,
      },
      {
        name: "Monthly Status Reports",
        enable: true,
      }
    ],
  },
];

  return (
    <div>
      <h1 className='title'>React Price Card</h1>
    <div className='container'>
      <div className='row'>
        {
          data.map((item,index)=>{
            return <Card item={item} key={index} />
          })
        }
      </div>
    </div>
    </div>
  )
}

export default App
