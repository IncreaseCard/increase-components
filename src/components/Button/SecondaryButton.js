import PrimaryButton from './PrimaryButton';

const SecondaryButton = PrimaryButton.extend`
  background-color: ${(props) => props.theme.colors.gray[500]};
  color: ${(props) => props.theme.colors.black[700]};
  text-shadow: none;

  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.gray[300]};
  }
  &:disabled {
    border: 1px solid ${(props) => props.theme.colors.gray[700]};
    color: ${(props) => props.theme.colors.gray[700]};
    text-shadow: none;
  }
`;

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
