import { LazyDiv } from "../lazyDiv"
import { COVER_IMAGE } from "../../images"

export const EndingImage = () => {
  return (
    <LazyDiv className="ending">
      <div className="image-wrapper">
        <img
          src={COVER_IMAGE["ending1-2"]}
          alt="ending image"
        />
      </div>
    </section>
   </LazyDiv>
  )
}
