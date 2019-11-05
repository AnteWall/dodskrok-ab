import { connect } from 'mongoose';

const uri: string = process.env.MOGNOURI || 'mongodb://127.0.0.1:27017/local';

const connection = connect(
  uri,
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Successfully Connected to MongoDB!');
    }
  }
);

export default connection;
