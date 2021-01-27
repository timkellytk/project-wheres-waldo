import { Link } from 'react-router-dom';

export const PrimaryBtn = (props) => (
  <Link
    to={props.link}
    onClick={props.onClick}
    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500"
  >
    {props.children}
  </Link>
);

export const SecondaryBtn = (props) => (
  <Link
    to={props.link}
    className={`${
      props.leftMargin && 'ml-3 '
    }inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50`}
  >
    {props.children}
  </Link>
);
