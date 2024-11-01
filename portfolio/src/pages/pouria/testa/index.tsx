const TestPage = ({ data }: { data: string }) => {
  return data;
};

export default TestPage;

export async function getServerSideProps({}) {
  const data = JSON.stringify({
    Hormoz: "Hormoz",
    Hormoz1: "Hormoz1",
    Hormoz2: "Hormoz1",
    Hormoz3: "Hormoz1",
    Hormoz4: "Hormoz1",
  });
  return {
    props: {
      data,
    },
  };
}
