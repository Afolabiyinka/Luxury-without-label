import styled from "styled-components";

const AddToBag = ({ text }: { text: string }) => {
  return (
    <StyledWrapper>
      <button className="BagBtn">
        <span className="IconContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h48Z"></path>
          </svg>
        </span>
        <p className="text">{text}</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .BagBtn {
    width: 15rem;
    height: 50px;
    border: none;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
  }

  .IconContainer {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: 0.5s;
  }

  .text {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1;
    transition-duration: 0.5s;
    font-size: 1.04em;
    font-weight: 600;
  }

  .BagBtn:hover .IconContainer {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: 0.5s;
  }

  .BagBtn:hover .text {
    transform: translate(10px, 0px);
    transition-duration: 0.5s;
  }

  .BagBtn:active {
    transform: scale(0.95);
    transition-duration: 0.5s;
  }
`;

export default AddToBag;
