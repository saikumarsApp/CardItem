import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {className, headerText, description} = bannerCardsList
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}
export default BannerCardItem
