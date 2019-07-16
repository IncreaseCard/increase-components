import 'normalize.css';
import './styles/base.css';
import newTheme from './themes/new/index';
import currentTheme from './themes/current/index';
import colorPalette from './themes/colorPalette';

export * from './components/ApplicationHeader/ApplicationHeader';
export * from './components/AmountBox/AmountBox';
export * from './components/Button/PrimaryButton';
export * from './components/Button/BlueButton';
export * from './components/Button/GreenButton';
export * from './components/Button/RedButton';
export * from './components/Button/InvisibleButton';
export * from './components/ProductButton/ProductButton';
export * from './components/Calendar/Calendar';
export * from './components/Checkbox/Checkbox';
export * from './components/ClearingsUploader/ClearingsUploader';
export * from './components/Currency/Currency';
export * from './components/Heading/Heading';
export * from './components/Link/Link';
export * from './components/Loading/Loading';
export * from './components/NumberInput/NumberInput';
export * from './components/Pagination/Pagination';
export * from './components/RadioButton/RadioButton';
export * from './components/Select/Select';
export * from './components/Select/SelectItem';
export * from './components/StepList/StepList';
export * from './components/Switch/Switch';
export * from './components/TabGroup/Tab';
export * from './components/Table/Table';
export * from './components/Table/TableData';
export * from './components/Table/TableHead';
export * from './components/Table/TableHeader';
export * from './components/Table/TableRow';
export * from './components/Table/TableRowExpandable';
export * from './components/TabGroup/TabGroup';
export * from './components/Tag/Tag';
export * from './components/TaxesTable/TaxesTable';
export * from './components/TextInput/TextInput';
export * from './components/Tooltip/Tooltip';
export * from './components/IncreaseLogo/IncreaseLogo';

const themes = {
  new: newTheme,
  current: currentTheme
};

export { colorPalette, themes };
