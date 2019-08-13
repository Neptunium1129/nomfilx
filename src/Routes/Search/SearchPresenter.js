import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;


const SearchPresenter = ({ 
  movieResults, tvResults , searchTerm, updateTerm , error, loading, handleSubmit
 }) => (
    <Container>
    <Helmet>
      <title>Search | NomFilx</title>
    </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="검색어를 입력하세요!" value={searchTerm} onChange={updateTerm}></Input>
        </Form>
        {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
             <Poster 
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              koTitle={movie.title}
              imageUrl={movie.poster_path}
              backdropImg={movie.backdrop_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0,4)}
              isMovie={true}
             />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
             <Poster 
              key={show.id}
              id={show.id}
              title={show.original_name}
              koTitle={show.name}
              imageUrl={show.poster_path}
              backdropImg={show.backdrop_path}
              rating={show.vote_average}
              year={show.first_air_date}
            />
            ))}
          </Section>
        )}
       {error && <Message text={error} color="#c0392b" />}
       {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 &&
        ( <Message text="Noting found" color="#95a5a6" /> )}
      </>
    )}
    </Container>
); 

SearchPresenter.protoTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    searchTerm : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string,
    handleSubmit : PropTypes.func.isRequired
};

export default SearchPresenter;

