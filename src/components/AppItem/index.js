// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <>
      <li className="list-item">
        <img src={imageUrl} alt={appName} className="imge-size" />
        <p className="description">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
