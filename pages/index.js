// domain.com/

import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  // this code will execute when the page is pre-generated
  const client = await MongoClient.connect(
    "mongodb+srv://mataspigaga:Centennial1905@cluster0.wnsdo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // used for pages that tend to get new data or content
    // data is never older than 1 second(s)
    revalidate: 1,
  };
};

export default HomePage;

// export const getServerSideProps = async (context) => {
//   // fetch data from an API
//   // only runs on the server, more private
//   // no need to revalidate, runs on every request

//   // access to incoming requests and responses using the below methods
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
