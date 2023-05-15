import React from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from "./Styled";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={({ target }) => setInput(target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;
