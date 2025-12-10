import { useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { Button } from "../button"
import ArrowLeft from "../../icons/angle-left-sm.svg?react"
import { GALLERY_IMAGES } from "../../images"
import  Arrowdown  from "../../icons/arrowdown.png"

export const Gallery = () => {
  const { openModal, closeModal } = useModal()
  const [expanded, setExpanded] = useState(false)

  const visibleCount = expanded ? GALLERY_IMAGES.length : 9 // 3열 × 4행 = 12개

  
  return (
    <LazyDiv className="card gallery instagram-gallery">

      <div className="nav-buttons">
  <button
    onMouseDown={() => {
      if (statusRef.current === "stationary") setClickMove("left")
    }}
  >
    <ArrowLeft className="arrow" />
  </button>

  <button
    onMouseDown={() => {
      if (statusRef.current === "stationary") setClickMove("right")
    }}
  >
    <ArrowLeft className="arrow right" />
  </button>
</div>
 
      <h2 className="english">Gallery</h2>
<p className="title-kr">갤러리</p>



      {/* --- thumbnail grid --- */}
      <div className={`grid ${expanded ? "expanded" : ""}`}>
        {GALLERY_IMAGES.slice(0, visibleCount).map((img, idx) => (
          <div
            key={idx}
            className="thumb"
            onClick={() =>
              openModal({
                className: "photo-view-modal",
                closeOnClickBackground: true,
                content: (
                  <div className="photo-view">
                    <img src={img} alt={`${idx}`} />
                  </div>
                ),
              })
            }
          >
            <img src={img} alt={`${idx}`} draggable={false} />
          </div>
        ))}
      </div>

      {/* Gradient + more button */}
      {!expanded && GALLERY_IMAGES.length > 9 && (
        <div className="more-wrapper">
          <div className="fade" />
          <button className="more-btn" onClick={() => setExpanded(true)}>
            더보기 <img src={Arrowdown} alt="더보기" className="more-arrow" />
          </button>
        </div>
      )}

      {/* collapse button (optional) */}
      {expanded && (
        <button className="less-btn" onClick={() => setExpanded(false)}>
          접기 ↑
        </button>
      )}
    </LazyDiv>
  )
}
