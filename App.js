import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MeetingForm from './component/Meetingform';
import LinkModal from './component/LinkModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [link, setLink] = useState("");

  // MeetingForm에서 submit하면 호출됨
  const handleFormSubmit = (formData) => {
    console.log("폼 데이터:", formData); // 선택사항
    const id = uuidv4();
    const newLink = `https://yourapp.com/invite/${id}`;
    setLink(newLink);
    setModalOpen(true); // 모달 열기
  };

  return (
    <div className="App">
      <MeetingForm onSubmit={handleFormSubmit} />
      
      {modalOpen && (
        <LinkModal
          link={link}
          onClose={() => setModalOpen(false)}
          onStart={() =>{
            console.log("약속서 작성 시작!");
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;