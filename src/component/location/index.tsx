import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <p className="title-kr">오시는 길</p>

        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>

        <Map />
      </LazyDiv>

      <LazyDiv className="card location">
        <div classname="location-info">
          
          <div className="content">
            <div className="heading">대중교통</div>
            회관으로 들어오는 길은 인도가 없어서
            <br />도보로 오시기에는 매우 위험합니다.
            <br />
            <b>평택역</b> 또는 <b>공도 시외버스 터미널</b>에서 하차하셔서
            <br />
            <b>택시</b>를 이용해 방문해주시기를 부탁드립니다.
            <br />
          </div>
        </div>

               <div classname="location-info">
          <div className="content">
            <div className="heading">자가용</div>
            <b>경기도 안성시 공도읍 신두만곡로 101</b>
            <br />주소를 정확히 검색하시어 근처 다른 회관으로
            <br />도착하지 않도록 주의해 주시기 바랍니다.
            <br />
            <br />
            주차공간이 협소한 관계로 가능하신 경우
            <br />
            일행분들과 카풀해주신다면 감사드리겠습니다.
          </div>
          </div>
      </LazyDiv>
    </>
  )
}
