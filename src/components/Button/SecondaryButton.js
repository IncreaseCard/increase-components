import PrimaryButton from './PrimaryButton';

const SecondaryButton = PrimaryButton.extend`
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.black};
  text-shadow: none;

  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.borderColor};
  }
  &:disabled {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    color: ${(props) => props.theme.colors.borderColor};
    text-shadow: none;
  }
`;

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
