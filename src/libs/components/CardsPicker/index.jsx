import PropTypes from "prop-types";
import * as S from "./styles";

export const CardPicker = ({ cards, monthlyOn, handleSelect }) => {
  return (
    <S.Container>
      {cards.map(({ img, title, price, selected, id }, index) => {
        return (
          <S.Card
            selected={selected}
            key={id}
            onClick={() => handleSelect(id)}
            tabIndex={index + 1}
          >
            <img src={img} alt="" />
            <S.Box>
              <h2>{title}</h2>
              <span>${!monthlyOn ? `${price}/mo` : `${price * 10}/yr`}</span>
              {monthlyOn && (
                <span className={monthlyOn ? "visible" : null}>
                  2 months free
                </span>
              )}
            </S.Box>
          </S.Card>
        );
      })}
    </S.Container>
  );
};

CardPicker.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  monthlyOn: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
