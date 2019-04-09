import 'normalize.css';

import './styles/base.css';

import ApplicationHeader from './components/ApplicationHeader/ApplicationHeader';
import AmountBox from './components/AmountBox/AmountBox';
import PrimaryButton from './components/Button/PrimaryButton';
import BlueButton from './components/Button/BlueButton';
import GreenButton from './components/Button/GreenButton';
import RedButton from './components/Button/RedButton';
import InvisibleButton from './components/Button/InvisibleButton';
import ProductButton from './components/ProductButton/ProductButton';
import Calendar from './components/Calendar/Calendar';
import Checkbox from './components/Checkbox/Checkbox';
import Currency from './components/Currency/Currency';
import Heading from './components/Heading/Heading';
import Link from './components/Link/Link';
import Loading from './components/Loading/Loading';
import NumberInput from './components/NumberInput/NumberInput';
import Pagination from './components/Pagination/Pagination';
import RadioButton from './components/RadioButton/RadioButton';
import Select from './components/Select/Select';
import SelectItem from './components/Select/SelectItem';
import StepList from './components/StepList/StepList';
import Switch from './components/Switch/Switch';
import Tab from './components/TabGroup/Tab';
import Table from './components/Table/Table';
import TableData from './components/Table/TableData';
import TableHead from './components/Table/TableHead';
import TableHeader from './components/Table/TableHeader';
import TableRow from './components/Table/TableRow';
import TableRowExpandable from './components/Table/TableRowExpandable';
import TabGroup from './components/TabGroup/TabGroup';
import Tag from './components/Tag/Tag';
import TaxesTable from './components/TaxesTable/TaxesTable';
import TextInput from './components/TextInput/TextInput';
import Tooltip from './components/Tooltip/Tooltip';

import newTheme from './themes/new/index';
import currentTheme from './themes/current/index';
import colorPalette from './themes/colorPalette';

const themes = {
  new: newTheme,
  current: currentTheme
};

export {
  ApplicationHeader,
  AmountBox,
  Calendar,
  Checkbox,
  Currency,
  Heading,
  Link,
  Loading,
  NumberInput,
  Pagination,
  PrimaryButton,
  BlueButton,
  GreenButton,
  RedButton,
  InvisibleButton,
  ProductButton,
  RadioButton,
  Select,
  SelectItem,
  StepList,
  Switch,
  Tab,
  Table,
  TableRow,
  TableRowExpandable,
  TableHead,
  TableHeader,
  TableData,
  TabGroup,
  Tag,
  TaxesTable,
  TextInput,
  Tooltip,
  colorPalette,
  themes
};
