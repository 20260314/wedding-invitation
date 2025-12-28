import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>
      <p className="title-kr">초대합니다</p>

      <div className="break" />

      <div className="content">믿음 안에서 두 사람이 만나</div>
      <div className="content">영원히 함께할 미래를</div>
      <div className="content">그리게 되었습니다.</div>
      <div className="break" />
      <div className="content">서로 사랑하고 아껴주는</div>
      <div className="content">사랑스러운 한 팀이 되어</div>
      <div className="content">여호와를 섬기고자 합니다.</div>
      <div className="break" />
      <div className="content">이 행복한 날,</div>
      <div className="content">따뜻한 축복으로 함께해 주신다면</div>
      <div className="content">더없는 기쁨으로 간직하겠습니다.</div>
      <div className="break" />

     
    </LazyDiv>
  )
}
