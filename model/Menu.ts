import moment from 'moment';

export type MenuItem = {
  _id?: string;
  name: string;
  imagePath: string;
  currentPrice: string;
  originalPrice: string;
  status: 'active' | 'deactive';
  availableDate: moment.Moment | string;
};
