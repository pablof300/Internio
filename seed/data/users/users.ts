import { Schema, Types } from 'mongoose';

interface User {
  username: string;
  email: string;
  password: string;
  _id: Types.ObjectId
}

const usersData: User[] = [
  {
    username: "pablo",
    email: "pablo@gmail.com",
    password: "123456",
    _id: new Types.ObjectId('16cb91bdc3464f14678934ca')
  }
];

export = usersData;
