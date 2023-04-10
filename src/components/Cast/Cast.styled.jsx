import styled from 'styled-components';

const StyledICastGallery = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 10px;
  padding: 30px 0px;
`;

const StyledCastItem = styled.li`
  width: 150px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledCastImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledCastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCastTitle = styled.h3`
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
`;

const StyledCastText = styled.p`
  text-align: center;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.06em;
`;

export {
  StyledICastGallery,
  StyledCastItem,
  StyledCastImg,
  StyledCastTitle,
  StyledCastText,
  StyledCastWrapper,
};
