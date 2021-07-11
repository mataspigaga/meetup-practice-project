// domain.com/

import { useEffect, useState } from "react";
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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
