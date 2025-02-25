import "./AboutUs.css";
import Back from "../assets/back.svg";
import HeaderBar from "../components/HeaderBar";

export default function AboutUs() {
  return (  
    <div>

       <div className="mobile-container">
         <header className="Header">
           <div className="Header-container">
             <a href="/"><img src={Back} alt="뒤로가기" className="back"></img></a>
             <div className="about-us">만든이</div>
           </div><hr></hr>          
        </header>
        <div className="mobile-grid">
           <div className="mobile-box">
            <span className="position">PM</span><br />
            <span className="title">방지원</span>
            <span className="subtitle">CAPS 37기</span>
            <span className="subtitle">컴퓨터공학전공</span>
           </div>
            <div className="mobile-box">
            <span className="position">디자인</span><br />
            <span className="title">김다혜</span>
            <span className="subtitle">CAPS 34기</span>
            <span className="subtitle">멀티미디어소프트웨어공학전공</span>
           </div>
            <div className="mobile-box">
            <span className="position">개발팀장</span><br />
            <span className="title">윤진수</span>
            <span className="subtitle">CAPS 34기</span>
            <span className="subtitle">컴퓨터공학전공</span>
           </div>
            <div className="mobile-box">
            <span className="position">FE</span><br />
            <span className="title">안아름</span>
            <span className="subtitle">CAPS 38기</span>
            <span className="subtitle">정보통신공학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">FE</span><br />
            <span className="title">원종인</span>
            <span className="subtitle">CAPS 37기</span>
            <span className="subtitle">약학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">FE</span><br />
            <span className="title">정유경</span>
            <span className="subtitle">CAPS 37기</span>
            <span className="subtitle">정보통신공학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">BE</span><br />
            <span className="title">김다인</span>
            <span className="subtitle">CAPS 38기</span>
            <span className="subtitle">정보통신공학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">BE</span><br />
            <span className="title">정윤섭</span>
            <span className="subtitle">CAPS 33기</span>
            <span className="subtitle">정보통신공학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">BE</span><br />
            <span className="title">최정흠</span>
            <span className="subtitle">CAPS 36기</span>
            <span className="subtitle">정보통신공학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">회장</span><br />
            <span className="title">신효환</span>
            <span className="subtitle">CAPS 37기</span>
            <span className="subtitle">컴퓨터공학전공</span>
           </div>
            <div className="mobile-box">
            <span className="position">부회장</span><br />
            <span className="title">성준영</span>
            <span className="subtitle">CAPS 38기</span>
            <span className="subtitle">수학과</span>
           </div>
            <div className="mobile-box">
            <span className="position">편집부장</span><br />
            <span className="title">정민주</span>
            <span className="subtitle">CAPS 38기</span>
            <span className="subtitle">사학과</span>
           </div>        
         </div>
        </div>
     
   </div>
 )
}
