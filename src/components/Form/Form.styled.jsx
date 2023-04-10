import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const StyledInput = styled.input`
  outline: none;
  padding: 10px 20px;
  margin-right: 3px;
  border: none;
  background-color: rgba(208, 224, 226, 0.9);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StyledSearchBtn = styled.button`
  padding: 9px 20px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(208, 224, 226, 0.9);
  cursor: pointer;
  color: #464040;
  font-weight: 600;
`;

export { StyledForm, StyledInput, StyledSearchBtn };
