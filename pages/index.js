// domain.com/

import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://picsum.photos/seed/firstmeetup/1500",
    address: "123 Main St, City, State, 12345",
    description: "This is the first test description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://picsum.photos/seed/secondmeetup/1500",
    address: "456 Main St, City, State, 12345",
    description: "This is the second test description",
  },
];

const HomePage = () => {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Layout>
  );
};

export default HomePage;
