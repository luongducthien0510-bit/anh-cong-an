import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>
                   Em có đôi điều muốn gửi đến anh. Em đã rất đắn đo suy nghĩ khá nhiều từ hôm qua. Trước tiên, em muốn trải lòng là em rất có thiện cảm với anh, cảm ơn anh thời gian qua đã quan tâm đến em. Thời gian tuy ngắn nhưng thực sự anh mang đến cho em cảm giác rất thoải mái và vui vẻ mỗi khi trò chuyện, thật sự rất khó và rất lâu rồi em mới làm quen được một người khác giới mà bắt sóng nhanh với em và vui tính như vậy. Em thực sự cảm thấy rất quý anh nhưng mà vì vài lí do nên em nghĩ là mình nên dừng lại ở đây (lí do cụ thể thì mẹ e đã nói với cô để trao đổi lại với mẹ anh). Em cảm ơn anh ạ. 
                   </p>
                    <p style={{ textAlign: "right" }}>Người gửi</p>
                    <p style={{ textAlign: "right" }}>Cô gái nhỏ bé yêu thiên nhiên</p>
                </div>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
