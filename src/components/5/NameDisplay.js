import React from "react";
const unsortedArray = new Array(100000)
  .fill()
  .map(() => Math.floor(Math.random() * 10000));

function NameDisplay({ name }) {
  console.log("Started sorting", new Date().getTime());
  const sortedArray = unsortedArray.sort();
  console.log(sortedArray);
  console.log("Finished sorting", new Date().getTime());

  return (
    <>
      <div>Name is {name}</div>
      <div>{sortedArray.join(",")}</div>
    </>
  );
}

export default React.memo(NameDisplay);

/*const sortedArray = React.useMemo(() => {
    console.log("Started sorting", new Date().getTime());
    const sortedArray = unsortedArray.sort();
    console.log(sortedArray);
    console.log("Finished sorting", new Date().getTime());
    return sortedArray;
  }, []);*/
