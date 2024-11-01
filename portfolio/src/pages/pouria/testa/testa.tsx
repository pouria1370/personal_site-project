const TestPage = ({ data }: { data: string }) => {
  const objectArray: { name: string }[] = [];
  for (const element of data) {
    objectArray.push({ name: element });
  }
  return (
    <div>
      hoooy i am test paeg
      {objectArray.map((item, index) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default TestPage;

export async function getServerSideProps(context) {

  const data = JSON.stringify({
    name: "Hormoz",
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
