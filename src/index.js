import '!css-loader!normalize.css';

import './styles/base.css';

import AmountBox from './components/AmountBox/AmountBox';
import PrimaryButton from './components/Button/PrimaryButton';
import SecondaryButton from './components/Button/SecondaryButton';
import InvisibleButton from './components/Button/InvisibleButton';
import Calendar from './components/Calendar/Calendar';
import Checkbox from './components/Checkbox/Checkbox';
import Currency from './components/Currency/Currency';
import Heading from './components/Heading/Heading';
import Link from './components/Link/Link';
import Loading from './components/Loading/Loading';
import MessageList from './components/MessageList/MessageList';
import NumberInput from './components/NumberInput/NumberInput';
import Pagination from './components/Pagination/Pagination';
import PaginationButton from './components/PaginationButton/PaginationButton';
import Panel from './components/Panel/Panel';
import RadioButton from './components/RadioButton/RadioButton';
import Select from './components/Select/Select';
import SelectItem from './components/SelectItem/SelectItem';
import StepList from './components/StepList/StepList';
import Switch from './components/Switch/Switch';
import Tab from './components/Tab/Tab';
import Table from './components/Table/Table';
import TableData from './components/Table/TableData';
import TableHead from './components/Table/TableHead';
import TableHeader from './components/Table/TableHeader';
import TableRow from './components/Table/TableRow';
import TableRowExpandable from './components/Table/TableRowExpandable';
import TabGroup from './components/TabGroup/TabGroup';
import TextInput from './components/TextInput/TextInput';

import newTheme from './themes/new';
import currentTheme from './themes/current';
import colorPalette from './themes/colorPalette';

const themes = {
  new: newTheme,
  current: currentTheme
};

export {
  AmountBox,
  Calendar,
  Checkbox,
  Currency,
  Heading,
  InvisibleButton,
  Link,
  Loading,
  MessageList,
  NumberInput,
  Pagination,
  PaginationButton,
  Panel,
  PrimaryButton,
  RadioButton,
  SecondaryButton,
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
  TextInput,
  colorPalette,
  themes
};
