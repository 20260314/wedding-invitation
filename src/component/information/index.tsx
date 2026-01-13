import { LazyDiv } from "../lazyDiv"
import { ENDING_IMAGE } from "../../images"

export const Notice = () => {
  return (
    <LazyDiv className="card notice">
      <div className="notice">
        <div className="notice-card">
         <h2 className="english">Notice</h2>
           <p className="title-kr">안내 말씀</p>
          <br />
          왕국회관에서 열리는 결혼식이기 때문에,
          <br />
          현장에는 축의대가 마련되지 않을 것입니다.
          <br />
           <br />
          <br />
          언제나 저희 두 사람에게
          <br />
          사랑과 관심을 나타내 주셔서 감사드립니다.
          <br />
          <br />
          신랑 황재윤, 신부 김봄 올림
        </div>
      </div>
    </LazyDiv>
  )
}

export const EndingImage = () => {
  return (
    <LazyDiv className="ending">
      <div className="image-wrapper">
        <img
          src={ENDING_IMAGE["ending3-2"]}
          alt="ending image"
        />
      </div>
   </LazyDiv>
  )
}
