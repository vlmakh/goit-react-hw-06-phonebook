import css from './Notification.module.css';
import { INotification } from 'components/types';


export function Notification({ msg }: INotification) {
  return <p className={css.msgText}>{msg}</p>;
}
