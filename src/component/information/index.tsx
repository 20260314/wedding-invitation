import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { AttendanceInfo } from "./attendance"

export const Information1 = () => {
  return (
    <>
      <h2 className="english">Notice</h2>
      <p className="title-kr">안내사항</p>
      <div className="notice-card">
      언제나 저희 두 사람에게 사랑과 관심을 나타내주셔서
        <br />
      정말 감사드립니다.
        <br />
      저희는 축의금 대신 축하해주시는 마음만 소중히 받겠습니다.
        </div>
      </div>
    </>
  )
}

export const Information = () => {
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information">
          <Information1 />
        </LazyDiv>
      </>
    )
  }
