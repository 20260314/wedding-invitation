import { useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { GALLERY_IMAGES } from "../../images"
import ArrowLeft from "../../icons/angle-left-sm.svg?react"
import ArrowDown from "../../icons/arrowdown.png"

export const Gallery = () => {
  const { openModal, closeModal } = useModal()

  const [expanded, setExpanded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCount = expanded ? GALLERY_IMAGES.length : 9

  /* --- 슬라이드 이동 함수 --- */
  const moveLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    )
  }

  const moveRight = () => {
    setCurrentIndex((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    )
  }

  /* --- 이미지 클릭 시 모달 오픈 --- */
  const openPhotoModal = (idx: number) => {
    setCurrentIndex(idx)

    openModal({
      className: "photo-view-modal",
      closeOnClickBackground: true,
      content: (
        <div
          className="photo-view"
          onClick={(e) => e.stopPropagation()} // 사진 클릭 시 모달 닫히지 않게
        >
          {/* left button */}
          <button className="slide-btn left" onClick={moveLeft}>
            <ArrowLeft className="arrow" />
          </button>

          <img
            src={GALLERY_IMAGES[currentIndex]}
            alt={`img-${currentIndex}`}
            className="photo-large"
            draggable={false}
          />

          {/* right button ( 좌우 반전 ) */}
          <button className="slide-btn right" onClick={moveRight}>
            <ArrowLeft className="arrow right" />
          </button>
        </div>
      ),
    })
  }

  return (
    <LazyDiv className="card gallery instagram-gallery">
      <h2 className="english">Gallery</h2>
      <p className="title-kr">갤러리</p>

      {/* --- Thumbnail Grid --- */}
      <div className={`grid ${expanded ? "expanded" : ""}`}>
        {GALLERY_IMAGES.slice(0, visibleCount).map((img, idx) => (
          <div key={idx} className="thumb" onClick={() => openPhotoModal(idx)}>
            <img src={img} alt={`${idx}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* --- 더보기 버튼 --- */}
      {!expanded && GALLERY_IMAGES.length > 9 && (
        <div className="more-wrapper">
          <div className="fade" />
          <button className="more-btn" onClick={() => setExpanded(true)}>
            더보기
            <img src={ArrowDown} alt="더보기" className="more-arrow" />
          </button>
        </div>
      )}

      {/* --- 접기 버튼 --- */}
      {expanded && (
        <button className="less-btn" onClick={() => setExpanded(false)}>
          접기 ↑
        </button>
      )}
    </LazyDiv>
  )
}
