import Bin from "./Stack";

function Lists({ list }) {
  return (
    <>
      <div className="row musk">
        {/* looping through list to create <Bin /> component for each element */}
        {list.map((it, index) => (
          <Bin
            key={index}
            name={it[0]}
            route={it[1]}
            src={it[2]}
            className="col-xl-4 col-md-6 col-sm-12"
            description={it[3]}
            imgClass="w-100 h-50"
          />
        ))}
      </div>
    </>
  );
}

export default Lists;
