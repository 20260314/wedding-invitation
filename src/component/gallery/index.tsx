import { useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useModal } from "../modal"
import { GALLERY_IMAGES } from "../../images"
import { Arrowdown } from "../../icons/arrowdown.png"

export const Gallery = () => {
  const { openModal, closeModal } = useModal()
  const [expanded, setExpanded] = useState(false)

  const visibleCount = expanded ? GALLERY_IMAGES.length : 9 // 3열 × 4행 = 12개

  return (
    <LazyDiv className="card gallery instagram-gallery">
      <h2 className="english">Gallery</h2>

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
