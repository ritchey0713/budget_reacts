import moment from 'moment';

export default [{
  id: 1,
  description: "coffee",
  note: "",
  amount: 1000000,
  createdAt: 0
},{
  id: 2,
  description: "rent",
  note: "",
  amount: 100000,
  createdAt: moment(0).subtract(4, "days").valueOf()
},{
  id: 3,
  description: "shopping",
  note: "",
  amount: 223421,
  createdAt: moment(0).add(4, 'days').valueOf()
},]