import { useQuery, gql } from "@apollo/client";
import Card from "./Card";

/* UPDATE ME */
export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        image
      }
    }
  }
`;

const CharacterList = () => {
  /*  UPDATE ME */
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return (
    <div className="m-24 flex flex-col items-center">
      {/* UPDATE ME  */}
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="my-10 border-2 w-1/2"
      />
      {loading && <p>loading</p>}
      {error && <p> error </p>}
      <div className="grid grid-cols-4 gap-10">
        {/* UPDATE ME  */}
        {data?.characters?.results.map((character) => (
          <div key={character.id}>
            <Card character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
