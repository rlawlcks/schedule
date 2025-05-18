import React, { useState } from "react";

export default function MeetingForm({ onSubmit }) {
  const [count, setCount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    console.log("인원:", count);
    console.log("모임명:", title);
    console.log("날짜:", date);

    // props로 받은 onSubmit 실행
    if (onSubmit) {
      const formData = {
        count,
        title,
        date,
      };
      onSubmit(formData);
    }
  };

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div style={styles.container}>
      <h4 style={styles.subText}>오늘은</h4>
      <h2 style={styles.month}>{month}월</h2>
      <h1 style={styles.day}>{day}</h1>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>몇 명이서 모이나요?</label>
          <select
            value={count}
            onChange={(e) => setCount(e.target.value)}
            style={styles.input}
          >
            <option value="">인원 수를 입력하세요</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>모임명</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="모임명을 입력하세요"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>날짜</label>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          >
            <option value="">약속날짜를 입력하세요</option>
            <option value="5월 9일">5월 9일</option>
            <option value="5월 10일">5월 10일</option>
          </select>
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          링크 생성하기
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "30px",
    background: "#fafafa",
    height: "100vh",
  },
  subText: {
    marginBottom: "0",
    fontSize: "18px",
  },
  month: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "4px 0",
  },
  day: {
    fontSize: "96px",
    fontWeight: "900",
    margin: "0 0 30px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  inputGroup: {
    width: "80%",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    background: "black",
    color: "white",
    padding: "14px 30px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};