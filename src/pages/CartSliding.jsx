import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import styled from 'styled-components';

export default function CartSlider() {
  return (
    <DIV className="sliding">
      <ReactCaroussel slidesToShow={3} slidesToScroll={1} infinite={true}>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="card_card">
              <h1>Card {index}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <button>Read more</button>
            </div>
          ))}
      </ReactCaroussel>
    </DIV>
  );
}

const DIV = styled.div`
  .sliding {
    padding: 10px 0; /* Adjusted padding */
  }

  p {
    font-size: 14px;
    text-align: justify;
    color: red;
  }

  .card_card {
    width: 100%;
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0/20%), 0 2px 2px 0 rgb(0 0 0/14%),
      0 1px 5px 0 rgb(0 0 0/12%);
  }

  @media screen and (max-width: 800px) {
    .sliding {
      padding: 10px;
    }
  }
`;
