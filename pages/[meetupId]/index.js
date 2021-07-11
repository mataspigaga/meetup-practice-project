import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://picsum.photos/seed/firstmeetup/1500"
      title="The First Meetup"
      address="123 Main St, City, State, 12345"
      description="Test description for the first meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    // indicates that all paths are defined when false
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://picsum.photos/seed/firstmeetup/1500",
        title: "The First Meetup",
        address: "123 Main St, City, State, 12345",
        description: "Test description for the first meetup",
      },
    },
  };
};

export default MeetupDetails;
