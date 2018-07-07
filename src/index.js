import '!css-loader!normalize.css';

import './styles/base.css';

import AmountBox from './components/AmountBox/AmountBox';
import Button from './components/Button/Button';
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
import Tab from './components/Tab/Tab';
import Table from './components/Table/Table';
import TableData from './components/TableData/TableData';
import TableHead from './components/TableHead/TableHead';
import TableHeader from './components/TableHeader/TableHeader';
import TableRow from './components/TableRow/TableRow';
import TableRowExpandable from './components/TableRowExpandable/TableRowExpandable';
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
  Button,
  Calendar,
  Checkbox,
  Currency,
  Heading,
  Link,
  Loading,
  MessageList,
  NumberInput,
  Pagination,
  PaginationButton,
  Panel,
  RadioButton,
  Select,
  SelectItem,
  StepList,
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
