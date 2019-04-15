import styled from 'styled-components';

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  vertical-align: baseline;
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '')};
  margin-right: ${(props) => (props.mr ? `${props.mr}rem` : '')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '')};
  margin-left: ${(props) => (props.ml ? `${props.ml}rem` : '')};
`;

export default Icon;
