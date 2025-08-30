import React from "react";
import { useFormik } from "formik";

function SearchBar({ onSearch }) {
  const searchStyle = {
    color: 'white',
  };

  const formik = useFormik({
    initialValues: {
      dish: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.dish.trim()) {
        onSearch(values.dish);
        resetForm();
      }
    },
  });

  const formStyle = {
    display: 'block',
    margin: '22px auto',
    border: '1px solid black',
    backgroundColor: '#ED3500',
    marginBottom: '22px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '450px', 
  };

  const inputStyle = {
    display: 'block',
    padding: '12px 9px',
    margin: '6px auto',
    border: 'none',
    backgroundColor: 'black',
    color: 'whitesmoke',
    fontWeight: '500',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '13px',
    textShadow: '2px 1px 1px black',
    marginBottom: '5px',
    width: '100%',
    maxWidth: '300px', 
  };

  const btnStyle = {
    display: 'block',
    margin: '12px auto',
    padding: '8px 22px',
    borderRadius: '12px',
    backgroundColor: '#868282ff',
    boxShadow: '1px 2px red',
    border: 'none',
    fontSize: '12px',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '14px',
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 w-full">
        <div style={{ height: '89px' }}></div>

        <form
          style={formStyle}
          onSubmit={formik.handleSubmit}
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[35%] mx-auto flex flex-col items-center"
        >
          <h3
            style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bolder',
              fontSize: '16px',
              paddingBottom: '16px',
              textShadow: '1px 2px 1px white',
            }}
          >
            Feeling Hungry? Discover Incredible Recipes
          </h3>

          <input
            style={inputStyle}
            type="text"
            name="dish"
            placeholder="Enter Dish Name"
            value={formik.values.dish}
            onChange={formik.handleChange}
            className="w-full"
          />
          <br />
          <button
            style={btnStyle}
            type="submit"
            className="hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;

